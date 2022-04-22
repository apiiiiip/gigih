import React, { useState, useContext, ChangeEvent, FormEvent } from "react";
import "../App.css";
import axios from "axios";
import { userID } from "./Homepage";
import Playlistlist from "../components/Addsong";
import { CreatePlaylistProps } from "../typescript/Types";

function Playlist() {
  const { access_token, listID, userProfileId } = useContext(userID);
  const [showForm, setShowForm] = useState(false);
  const [createdPlaylist, setCreatedPlaylist] = useState<CreatePlaylistProps[]>(
    []
  );
  const addItem = async (id: string) => {
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
  const showFormHandler = () => {
    setShowForm(!showForm);
  };

  const [formData, setFormData] = useState({
    name: "",
    desc: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({ ...prevState, name: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios({
      method: "POST",
      url: `https://api.spotify.com/v1/users/${userProfileId}/playlists`,
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      data: {
        name: formData.name,
        description: formData.desc,
        public: false,
        collaborative: false,
      },
    }).then((res) => {
      // console.log(res.data);
      setCreatedPlaylist((prevState) => [...prevState, res.data]);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button
          className="bg-black border-2 shadow-[0_7px_rgb(77,77,77)] border-cyan-500 hover:bg-[rgb(32,41,42)] hover:cursor-pinter text-zinc-200 font-bold py-2 px-4 rounded-full active:bg-[rgb(65,98,99)] active:shadow-[0_5px_rgb(15,23,42)] active:translate-y-[3px] mb-3 ml-32"
          onClick={showFormHandler}
        >
          Create Playlist
        </button>
        <br></br>
      </form>
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="pt-2 border-2 border-cyan-500 w-52 h-52 rounded-xl bg-[rgb(32,41,42)] ml-28"
        >
          <label className="text-slate-300 ml-5">
            Playlist Description <br></br>
            <input
              className="mt-1 mb-2 w-44 px-3 py-1  rounded-full border-2 border-cyan-500 bg-[rgb(36,60,61)] text-white"
              name="desc"
              type="text"
              placeholder="Description"
              onChange={handleChange}
            />
            <br></br>
          </label>

          <label className="text-slate-300 ml-5">
            Playlist Name <br></br>
            <input
              minLength={10}
              className="mt-1 mb-2 w-44 px-3 py-1  rounded-full border-2 border-cyan-500 bg-[rgb(36,60,61)] text-white"
              name="name"
              type="text"
              placeholder=".  .  .  .  .  ."
              onChange={handleChange}
            />
            <br></br>
          </label>

          <button
            className="bg-black border-2 shadow-[0_7px_rgb(77,77,77)] border-cyan-500 hover:bg-[rgb(32,41,42)] hover:cursor-pinter text-zinc-200 font-bold py-1 px-4 rounded-full active:bg-[rgb(65,98,99)] active:shadow-[0_5px_rgb(15,23,42)] active:translate-y-[3px] ml-12"
            type="submit"
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
