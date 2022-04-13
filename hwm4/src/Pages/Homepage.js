//import { Component } from "react";
import "../App.css";
import React, { createContext, useState, useEffect } from "react";
// import Search from "./searchbutton";
import axios from "axios";
import Mainroom from "./Mainroom";
import { useSelector, useDispatch } from "react-redux";
import { setAccessToken } from "../redux/Accountslice";

//const CLIENT_ID = process.env.CLIENT_ID

//const CLIENT_SECRET = process.env.CLIENT_SECRET

// class App extends Component {
//   state = {access_token:"", searchResult:[], searchQuery:"" };
export const userID = createContext();

function Dashboard() {
  const dispatch = useDispatch();
  // const [access_token, set_access_token] = useState("");
  const access_token = useSelector((state) => state.account.accessToken);
  // const [searchResult, setsearchResult] = useState([]);
  // const searchValue = useSelector((state) => state.search.searchValue);
  const [userProfile, setuserProfile] = useState({});

  const handleAccessToken = () => {
    window.location.href =
      "https://accounts.spotify.com/authorize?client_id=0351cc6087e444268ec2ff1e557de0c6&scope=playlist-modify-private&response_type=token&redirect_uri=http://localhost:3000";
  };

  // const handleSearch = useCallback(async () => {
  //   await fetch(
  //     `https://api.spotify.com/v1/search?q=${searchValue.replaceAll(
  //       " ",
  //       "+"
  //     )}&type=track&limit=12`,
  //     {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${access_token}`,
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((res) => setsearchResult(res.tracks.items));
  // }, [searchValue, access_token]);
  // console.log(searchResult)

  const handleGetUserProfile = async (token) => {
    await axios({
      method: "GET",
      url: "https://api.spotify.com/v1/me",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => setuserProfile(res.data));
  };
  // console.log(userProfile)

  useEffect(() => {
    const token =
      window.location.hash &&
      window.location.hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .replace("access_token=", "");
    if (token) {
      handleGetUserProfile(token);
      // set_access_token(token);
      dispatch(setAccessToken(token));
    }
  }, []);

  const [listID, setlistID] = useState([]);

  const addID = (id) => {
    setlistID((prevState) => [...prevState, id]);
  };
  const deleteID = (id) => {
    setlistID((prevState) =>
      prevState.filter((selectedID) => selectedID !== id)
    );
  };

  // console.log(listID);
  return (
    <userID.Provider
      value={[access_token, listID, addID, deleteID, userProfile.id]}
    >
      <div className="bg-fixed bg-slate-900">
        <div className="grid grid-cols-1 grid-rows-1 place-items-center h-screen">
          {access_token === "" ? (
            <button
              className="bg-black border-2 shadow-[0_7px_rgb(77,77,77)] border-cyan-500 hover:bg-[rgb(32,41,42)] hover:cursor-pinter text-zinc-200 font-bold py-2 px-4 rounded-full active:bg-[rgb(65,98,99)] active:shadow-[0_5px_rgb(15,23,42)] active:translate-y-[3px]"
              onClick={handleAccessToken}
            >
              Login to Spotify
            </button>
          ) : (
            <Mainroom />
          )}
        </div>
        {/* {searchResult.map((item) => {
            return (
              <div key={item.id} className="card">
                <img src={item.album.images[2].url} alt="foto" />
                <div className="container">
                  <div></div>
                  <p>{item.name}</p>
                  <p>{item.artists[0].name}</p>
                  <p>{item.album.release_date}</p>
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
          })} */}
      </div>
    </userID.Provider>
  );
}

export default Dashboard;
