import React from "react";
import "../App.css";
// import Playlist from "./playlist";
//import {Component} from 'react';
import { changeSearch } from "../redux/Searchslice";
import { useDispatch } from "react-redux";
import { SearchProps } from "../typescript/Types";

// eslint-disable-next-line react/prop-types
function Search({ handleSearch }: SearchProps) {
  const dispatch = useDispatch();

  return (
    <>
      <>
        <div data-testid="search-button" className="ml-6 mt-6">
          <div className="qe">
            <input
              data-testid="search-input"
              className="absolute w-80 px-4 py-1  rounded-full border-2 border-cyan-500 bg-[rgb(36,60,61)] text-white"
              onChange={(e) => dispatch(changeSearch(e.target.value))}
              placeholder="Artists, Songs, or Something ..."
            />
          </div>
          <div className="ml-20">
            <button
              className="absolute bg-black border-2 shadow-[0_7px_rgb(77,77,77)] border-cyan-500 hover:bg-[rgb(32,41,42)] hover:cursor-pinter text-zinc-200 font-bold py-2 px-4 rounded-full active:bg-[rgb(65,98,99)] active:shadow-[0_5px_rgb(15,23,42)] active:translate-y-[3px] mt-12 ml-7"
              onClick={() => {
                handleSearch();
              }}
            >
              {" "}
              Search{" "}
            </button>
          </div>
        </div>
      </>
    </>
  );
}

// let input = document.getElementById("type");
// input.addEventListener("keyup",
// function(event) {
//     if (event.keyCode === 13) {
//         event.preventDefault();
// document.getElementById("btnsearch").click();
//     }
// });

// class Search extends Component {
//     constructor(props){
//         super(props)

//         this.toggleFunction = props.toggleFunction
//         this.handleSearch = props.handleSearch
//     }

//      render() {
//          return(
//              <div>
//                  <div>
//                      <input
//                          onChange = {(e) => this.toggleFunction(e.target.value)}
//                      />
//                      <button
//                          onClick = {() => {this.handleSearch()} }
//                      >Search</button>

//                      <div>

//                      </div>
//                  </div>
//              </div>
//          )
//      }
// }

export default Search;
