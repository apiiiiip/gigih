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
    <div>
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
                className="inputname"
                name="name"
                type="text"
                placeholder="Playlist Name"
                onChange={handleChange}
              />
              <br></br>
            </label>

            <label>
              Playlist Description <br></br>
              <input
                className="inputdesc"
                name="desc"
                type="text"
                placeholder="Description"
                onChange={handleChange}
              />
              <br></br>
            </label>
            <button
              className="btnsubmitplaylist"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        )}
      </div>
      <div className="createdplaylist">
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
