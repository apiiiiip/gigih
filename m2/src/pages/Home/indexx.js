import '../../../src/App.css';
import '../../components/gif';
import {gif} from '../../components/gif'

function Exercise() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{gif.title}</p>
          <img src ={gif.url}/>
        </header>
        <div className="main">
          <h2>Search</h2>
          <form className="searchBar">
            <input className="searchBarInput" placeholder="search...">
            </input>
            <button className="searchBarBtn" type="submit"><i class="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Exercise;