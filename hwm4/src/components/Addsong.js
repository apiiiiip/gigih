/* eslint-disable react/prop-types */
import React from "react";

function Playlistlist({ playlistName, id, addItem }) {
  return (
    <div>
      <h3>{playlistName}</h3>
      <button
        onClick={() => {
          addItem(id);
        }}
      >
        Add Song
      </button>
    </div>
  );
}

export default Playlistlist;
