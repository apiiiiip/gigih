import { changeSearch } from "../redux/Searchslice";
import { useDispatch } from "react-redux";

function Searchbar({handleSearch}) {
  const dispatch = useDispatch();
  return(
 
    <form onSubmit={handleSearch}>
        <input onChange={(e) => dispatch(changeSearch(e.target.value))}/>
        <button type="submit">Search</button>
    </form>

  )}

export default Searchbar;