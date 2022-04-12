import React, { useState, useContext, useCallback } from "react";
import "../App.css";
import { useSelector } from "react-redux";
import { userID } from "../Pages/Homepage";
import Search from "./searchbutton";

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

  return (
    <div className="mainsearch">
      <div>
        <Search handleSearch={handleSearch} />
      </div>
      <div className="searchcard">
        {searchResult.map((item) => {
          return (
            <div key={item.id} className="card">
              <img src={item.album.images[2].url} alt="foto" />
              <div className="container">
                <p className="songname">{item.name}</p>
                <p className="artistname">{item.artists[0].name}</p>
                <p className="releasedate">{item.album.release_date}</p>
                <button
                  className="selectbutton"
                  onClick={() =>
                    listID.includes(item.id)
                      ? deleteID(item.id)
                      : addID(item.id)
                  }
                >
                  {listID.includes(item.id) ? "Deselect" : "Select"}
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
