import React from "react";
import {Component} from 'react';
import '../../../src/App.css';

class Search extends Component {
   state = {searchResult:[], searchQuery:"" };

   handleSearch = async() => {

        await fetch(
            "https://api.giphy.com/v1/gifs/search?api_key=YO4YioSM96mNcIXw257555iXcp4iIm9U&q=cartoon&limit=12&offset=0&rating=g&lang=en"
            )
                .then((response) => response.json())
                .then((gifsData) => this.setState({searchResult: gifsData.data}));
    };

    render() {
        return(
            <div>
                <div>
                    <input
                        onChange = {(e) => this.setState({searchQuery: e.target.value})}
                    />
                    <button
                        onClick = {this.handleSearch}
                    >Search</button>

                    <div>
                        {this.state.searchResult.map((gif) => (
                            <div key={gif.id}>
                                <p>{gif.title}</p>
                                <img src={gif.images.original.url}/>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }


}

export default Search;