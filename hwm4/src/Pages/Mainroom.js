import React, { useState, useContext, useCallback } from "react";
import "../App.css";
import { useSelector } from "react-redux";
import { userID } from "../Pages/Homepage";
import Search from "./searchbutton";
import Playlist from "./playlist";

function Mainroom() {
  const [access_token, listID, addID, deleteID] = useContext(userID);
  const [searchResult, setsearchResult] = useState([]);
  const searchValue = useSelector((state) => state.search.searchValue);

  const handleSearch = useCallback(async () => {
    await fetch(
      `https://api.spotify.com/v1/search?q=${searchValue.replaceAll(
        " ",
        "+"
      )}&type=track&limit=12`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => setsearchResult(res.tracks.items));
  }, [searchValue, access_token]);
  // console.log(searchResult);

  return (
    <div className="grid grid-rows-[300px_minmax(70px,_1fr)_340px] grid-cols-[150px_minmax(350px,_1fr)_400px]">
      <div className="col-start-1 row-start-1">
        <Search handleSearch={handleSearch} />
      </div>
      <div className="col-start-2 row-start-1">
        <h1 className="text-[rgb(165,186,196)] ml-96 mt-28 text-8xl font-mono font-bold">
          Sepotipai
        </h1>
      </div>
      <div className="col-start-3 row-start-1 mt-5 ml-6">
        <Playlist />
      </div>
      <div className="col-start-1 row-start-3 col-end-4 row-end-4 ml-6">
        {searchResult.map((item) => {
          return (
            <div
              key={item.id}
              id="card"
              className=" text-white float-left flex flex-row shadow-cyan-500 drop-shadow-md transform transition duration-500 hover:scale-105 border-2 border-cyan-500 bg-black w-60 h-40 m-1 justify-center items-center rounded-md "
            >
              <img
                className="rounded-full border-2 border-cyan-700 ml-3 mr-3"
                src={item.album.images[2].url}
                alt="foto"
              />
              <div className="container">
                <div id="songdesc" className="text-xs text-Justify p-2">
                  <p id="songname" className="capitalize font-semibold">
                    {item.name}
                  </p>
                  <p
                    id="artistname"
                    className="uppercase font-bold text-sky-200 "
                  >
                    {item.artists[0].name}
                  </p>
                  <p className="duration">
                    {(item.duration_ms / 60000).toFixed(0) +
                      ":" +
                      ((item.duration_ms / 1000) % 60 <= 9
                        ? "0" + ((item.duration_ms / 1000) % 60).toFixed(0)
                        : ((item.duration_ms / 1000) % 60).toFixed(0))}
                  </p>
                </div>
                <button
                  className="text-xs p-2 bg-black border-2 shadow-[0_7px_rgb(77,77,77)] border-cyan-500 hover:bg-[rgb(32,41,42)] hover:cursor-pinter text-zinc-200 font-bold py-1 px-5 rounded-full active:bg-[rgb(65,98,99)] active:shadow-[0_5px_rgb(15,23,42)] active:translate-y-[3px] ml-4"
                  onClick={() =>
                    listID.includes(item.id)
                      ? deleteID(item.id)
                      : addID(item.id)
                  }
                >
                  {listID.includes(item.id) ? "DESELECT" : "SELECT"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Mainroom;
