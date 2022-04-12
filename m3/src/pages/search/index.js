import React, {useState, useCallback} from "react";
import '../../../src/App.css';
import Searchbar from "../../components/searchBar";


function Search() {
    const [searchResult, setsearchResult] = useState([]);
    const [searchQuery, setsearchQuery] = useState("");


// class Search extends Component {
//    state = {searchResult:[], searchQuery:"" };

   const handleSearch =  useCallback(async(e) => {
        e.preventDefault()
        await fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=YO4YioSM96mNcIXw257555iXcp4iIm9U&q=${searchQuery}&limit=12&offset=0&rating=g&lang=en`
            )
                .then((response) => response.json())
                .then((gifsData) => setsearchResult(gifsData.data)
                )}
   ,[searchQuery])
console.log(searchResult)
//    useEffect(() => {
//        handleSearch()
//    }, [])
        return(
            <div>
                <div>
                    <Searchbar
                        handleInputChange={(value) => setsearchQuery(value)}
                        handleSearch = {handleSearch}
                    />
                    <div>
                        {searchResult.map((gif) => (
                            <div key={gif.id}>
                                <p>{gif.title}</p>
                                <img src={gif.images.original.url} alt="foto animasi"/>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
                
        )
     
    
}








export default Search;