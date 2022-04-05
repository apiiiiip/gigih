import React from "react";
import '../App.css';
import Playlist from "./playlist";
//import {Component} from 'react';
import {changeSearch} from "../redux/Searchslice";
import {useDispatch} from "react-redux";


function Search({handleSearch}) {
    const dispatch = useDispatch();
 
    return(
        <div id="searchcontainer">
           <input id="type" onChange= {(e) => dispatch(changeSearch(e.target.value))} placeholder="Artists, Songs, or Something ..."/>
           <button id="btnsearch" onClick = {() => {handleSearch()} }> Search </button>
           <Playlist />
        </div>
        
         
        
        
    )
    

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