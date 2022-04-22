//import { Component } from "react";
import "../App.css";
import React, { createContext, useState, useEffect } from "react";
// import Search from "./searchbutton";
import axios from "axios";
import Mainroom from "./Mainroom";
import { useSelector, useDispatch } from "react-redux";
import { setAccessToken } from "../redux/Accountslice";
import { RootState } from "../redux/Store";
import { HomepageContext, UserProfileProps } from "../typescript/Types";

export const userID = createContext<HomepageContext>({
  access_token: "",
  listID: [],
  addID: () => null,
  deleteID: () => null,
  userProfileId: "",
});

function Dashboard() {
  const dispatch = useDispatch();

  const access_token = useSelector(
    (state: RootState) => state.account.accessToken
  );

  const [userProfile, setuserProfile] = useState<UserProfileProps>({
    id: "",
  });

  const handleAccessToken = () => {
    window.location.href = `https://accounts.spotify.com/authorize?client_id=0351cc6087e444268ec2ff1e557de0c6&scope=playlist-modify-private&response_type=token&redirect_uri=${window.location.origin}`;
  };

  const handleUserProfile = async (token: string) => {
    await axios({
      method: "GET",
      url: "https://api.spotify.com/v1/me",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      // console.log(res.data);
      setuserProfile(res.data);
    });
  };
  // console.log(userProfile);

  useEffect(() => {
    const token =
      window.location.hash &&
      window.location.hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))!
        .replace("access_token=", "");
    if (token) {
      handleUserProfile(token);
      // set_access_token(token);
      dispatch(setAccessToken(token));
    }
  }, []);

  const [listID, setlistID] = useState<string[]>([]);

  const addID = (id: string) => {
    setlistID((prevState) => [...prevState, id]);
  };
  const deleteID = (id: string) => {
    setlistID((prevState) =>
      prevState.filter((selectedID) => selectedID !== id)
    );
  };

  // console.log(listID);
  return (
    <userID.Provider
      value={{
        access_token,
        listID,
        addID,
        deleteID,
        userProfileId: userProfile!.id,
      }}
    >
      <div className="">
        <div className="grid grid-cols-1 grid-rows-1 place-items-center h-screen">
          {access_token === "" ? (
            <button
              data-testid="login-button"
              className="bg-black border-2 shadow-[0_7px_rgb(77,77,77)] border-cyan-500 hover:bg-[rgb(32,41,42)] hover:cursor-pinter text-zinc-200 font-bold py-2 px-4 rounded-full active:bg-[rgb(65,98,99)] active:shadow-[0_5px_rgb(15,23,42)] active:translate-y-[3px]"
              onClick={handleAccessToken}
            >
              Login to Spotify
            </button>
          ) : (
            <Mainroom />
          )}
        </div>
      </div>
    </userID.Provider>
  );
}

export default Dashboard;
