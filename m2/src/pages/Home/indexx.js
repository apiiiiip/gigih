import '../../../src/App.css';
import Gif from '../../components/gifComp';
import {gifData} from '../../components/gif'

function Exercise() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Search</h2>
          <form className="searchBar">
            <input className="searchBarInput" placeholder="search...">
            </input>
            <button className="searchBarBtn" type="submit"><i class="fa fa-search"></i>
            </button>
          </form>
        </header>
        <div className="main">
        {
          gifData
          .filter((gifItem) => gifItem.rating === "g")
          .map((gifShow) => (
            <Gif key={gifShow.id} title={gifShow.title} url={gifShow.url} />
          ))
        } 
        
        </div>
      </div>
    );
  }
  
  export default Exercise;