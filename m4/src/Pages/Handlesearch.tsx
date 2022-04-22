import React, { ChangeEvent, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import Searchbar from "../Components/Searchbar";
import { Link } from "react-router-dom";
import "../App.css";
import { GiphyData } from "../typescript/types";
import { RootState } from "../redux/store";

function Handlesearch(): JSX.Element {
  const [responseData, setResponseData] = useState<GiphyData[]>([]);
  const searchValue = useSelector(
    (state: RootState) => state.search.searchValue
  );

  // class Search extends Component {
  //    state = {searchResult:[], searchQuery:"" };

  const handleSearch = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=YO4YioSM96mNcIXw257555iXcp4iIm9U&q=${searchValue}&limit=12&offset=0&rating=g&lang=en`
      )
        .then((response) => response.json())
        .then((gifsData) => setResponseData(gifsData.data));
      // .then((gifsData) => console.log(gifsData.data));
    },
    [searchValue]
  );
  // console.log(responseData);

  //    useEffect(() => {
  //        handleSearch()
  //    }, [])
  return (
    <>
      <Link to="/Trending">Trending</Link>

      <Searchbar handleSearch={handleSearch} />

      {responseData &&
        responseData.map((gif) => {
          return (
            <div key={gif.id}>
              <p>{gif.title}</p>
              <img src={gif.images.original.url} alt="foto animasi" />
            </div>
          );
        })}
    </>
  );
}

export default Handlesearch;
