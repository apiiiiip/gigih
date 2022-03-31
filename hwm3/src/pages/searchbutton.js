import React from "react";
import '../App.css';
import {Component} from 'react';


function Search({toggleFunction, handleSearch}) {
    return(
        <div>
           <input onChange = {(e) => toggleFunction(e.target.value)}/>
           <button onClick = {() => {handleSearch()} }>Search</button> 
        </div>
    )

}





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