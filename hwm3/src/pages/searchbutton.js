import React from "react";
import '../App.css';
import {Component} from 'react';


class Search extends Component {
    constructor(props){
        super(props)
        
        this.toggleFunction = props.toggleFunction
        this.handleSearch = props.handleSearch
    }
 
     render() {
         return(
             <div>
                 <div>
                     <input
                         onChange = {(e) => this.toggleFunction(e.target.value)}
                     />
                     <button
                         onClick = {() => {this.handleSearch()} }
                     >Search</button>
 
                     <div>
                        
                     </div>
                 </div>
             </div>
         )
     }
}
 
 
 
 
 export default Search;