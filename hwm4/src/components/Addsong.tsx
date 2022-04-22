/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { PlaylistlistProps } from "../typescript/Types";

function Playlistlist({ playlistName, id, addItem }: PlaylistlistProps) {
  return (
    <div className="ml-28">
      <h3 className="text-white font-semibold mt-1 mb-1 ml-5">
        Created: {playlistName}
      </h3>
      <button
        data-testid="add-button"
        className="bg-black border-2 shadow-[0_7px_rgb(77,77,77)] border-cyan-500 hover:bg-[rgb(32,41,42)] hover:cursor-pinter text-zinc-200 font-bold  px-4 rounded-full active:bg-[rgb(65,98,99)] active:shadow-[0_5px_rgb(15,23,42)] active:translate-y-[3px] ml-12"
        onClick={() => {
          alert("Song added to playlist");
          addItem(id);
        }}
      >
        Add Song
      </button>
    </div>
  );
}

export default Playlistlist;
