import React, { useState, useContext } from "react";
import "../App.css";
import axios from "axios";
import { userID } from "../Pages/Homepage";
import Playlistlist from "../components/Addsong";

function Playlist() {
  const [access_token, listID, , , userIDAja] = useContext(userID);
  const [showForm, setShowForm] = useState(false);
  const [createdPlaylist, setCreatedPlaylist] = useState([]);
  const addItem = async (id) => {
    await axios({
      method: "POST",
      url: `https://api.spotify.com/v1/playlists/${id}/tracks`,
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      data: {
        uris: listID.map((item) => `spotify:track:${item}`),
      },
    });
  };
  const showFormHandler = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };

  const initialFormData = Object.freeze({
    name: "",
    desc: "",
  });

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios({
      method: "POST",
      url: `https://api.spotify.com/v1/users/${userIDAja}/playlists`,
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      data: {
        name: formData.name,
        description: formData.desc,
        public: false,
        collaborative: false,
      },
    }).then((res) =>
      setCreatedPlaylist((prevState) => [...prevState, res.data])
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button
          className="bg-black border-2 shadow-[0_7px_rgb(77,77,77)] border-cyan-500 hover:bg-[rgb(32,41,42)] hover:cursor-pinter text-zinc-200 font-bold py-2 px-4 rounded-full active:bg-[rgb(65,98,99)] active:shadow-[0_5px_rgb(15,23,42)] active:translate-y-[3px] mb-3 ml-5"
          onClick={showFormHandler}
        >
          Create Playlist
        </button>
        <br></br>
      </form>
      {showForm && (
        <form className="pt-2 border-2 border-cyan-500 w-52 h-52 rounded-xl bg-[rgb(32,41,42)]">
          <label className="text-slate-300 ml-5">
            Playlist Name <br></br>
            <input
              className="mt-1 mb-2 ml-2.5 w-44 px-3 py-1  rounded-full border-2 border-cyan-500 bg-[rgb(36,60,61)] text-white"
              name="name"
              type="text"
              placeholder=".  .  .  .  .  .  .  ."
              onChange={handleChange}
            />
            <br></br>
          </label>

          <label className="text-slate-300 ml-5">
            Playlist Description <br></br>
            <input
              className="mt-1 mb-2 ml-2.5 w-44 px-3 py-1  rounded-full border-2 border-cyan-500 bg-[rgb(36,60,61)] text-white"
              name="desc"
              type="text"
              placeholder="Description"
              onChange={handleChange}
            />
            <br></br>
          </label>
          <button
            className="bg-black border-2 shadow-[0_7px_rgb(77,77,77)] border-cyan-500 hover:bg-[rgb(32,41,42)] hover:cursor-pinter text-zinc-200 font-bold py-1 px-5 rounded-full active:bg-[rgb(65,98,99)] active:shadow-[0_5px_rgb(15,23,42)] active:translate-y-[3px] ml-12"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      )}
      {createdPlaylist &&
        createdPlaylist.map((playlist) => (
          <Playlistlist
            key={playlist.id}
            addItem={addItem}
            playlistName={playlist.name}
            id={playlist.id}
          />
        ))}
    </>
  );
}

export default Playlist;
