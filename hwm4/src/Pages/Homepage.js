//import { Component } from "react";
import "../App.css";
import React, { createContext, useState, useEffect, useCallback } from "react";
import Search from "./searchbutton";
import axios from "axios";
import { useSelector } from "react-redux";

//const CLIENT_ID = process.env.CLIENT_ID

//const CLIENT_SECRET = process.env.CLIENT_SECRET

// class App extends Component {
//   state = {access_token:"", searchResult:[], searchQuery:"" };
export const userID = createContext();

function Dashboard() {
  const [access_token, set_access_token] = useState("");
  const [searchResult, setsearchResult] = useState([]);
  const searchValue = useSelector((state) => state.search.searchValue);
  const [userProfile, setuserProfile] = useState({});

  const handleAccessToken = () => {
    window.location.href =
      "https://accounts.spotify.com/authorize?client_id=0351cc6087e444268ec2ff1e557de0c6&scope=playlist-modify-private&response_type=token&redirect_uri=http://localhost:3000";
  };

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
      set_access_token(token);
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
    <userID.Provider value={[userProfile.id, access_token, listID]}>
      <div className="App">
        <div className="Login">
          {access_token === "" ? (
            <button onClick={handleAccessToken}>Login to Spotify</button>
          ) : (
            <Search handleSearch={handleSearch} />
          )}
        </div>
        {searchResult.map((item) => {
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
        })}
      </div>
    </userID.Provider>
  );
}

export default Dashboard;
