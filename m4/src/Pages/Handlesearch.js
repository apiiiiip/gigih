import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import Searchbar from "../Components/Searchbar";
import { Link } from "react-router-dom";
import "../App.css";

function Handlesearch() {
  const [responseData, setResponseData] = useState([]);
  const { searchValue } = useSelector((state) => state.search);

  // class Search extends Component {
  //    state = {searchResult:[], searchQuery:"" };

  const handleSearch = useCallback(
    async (e) => {
      e.preventDefault();
      await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=YO4YioSM96mNcIXw257555iXcp4iIm9U&q=${searchValue}&limit=12&offset=0&rating=g&lang=en`
      )
        .then((response) => response.json())
        .then((gifsData) => setResponseData(gifsData.data));
    },
    [searchValue]
  );
  console.log(responseData);

  //    useEffect(() => {
  //        handleSearch()
  //    }, [])
  return (
    <div>
      <div>
        <Link to="/Trending">Trending</Link>
        <Searchbar handleSearch={handleSearch} />
        <div>
          {responseData.map((gif) => (
            <div key={gif.id}>
              <p>{gif.title}</p>
              <img src={gif.images.original.url} alt="foto animasi" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Handlesearch;
