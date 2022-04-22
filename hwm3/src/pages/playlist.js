import React, { useState, useContext } from "react";
import "../App.css";
import axios from "axios";
import { userID } from "../App";
import Playlistlist from "../components/Playlistlist";

function Playlist() {
  const { userIDAja, access_token, listID } = useContext(userID);
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
    <div>
      <form onSubmit={handleSubmit}>
        <button className="createButton" onClick={showFormHandler}>
          Create Playlist
        </button>
        <br></br>
      </form>
      {showForm && (
        <form className="inputPlaylist">
          <label>
            Playlist Name <br></br>
            <input
              name="name"
              type="text"
              min="10"
              placeholder="Playlist Name"
              onChange={handleChange}
            />
            <br></br>
          </label>

          <label>
            Playlist Description <br></br>
            <input
              name="desc"
              type="text"
              placeholder="Description"
              onChange={handleChange}
            />
            <br></br>
          </label>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      )}
      <div>
        {createdPlaylist &&
          createdPlaylist.map((playlist) => (
            <Playlistlist
              key={playlist.id}
              addItem={addItem}
              playlistName={playlist.name}
              id={playlist.id}
            />
          ))}
      </div>
    </div>
  );
}

export default Playlist;
