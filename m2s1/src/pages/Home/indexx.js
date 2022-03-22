import '../../../src/App.css';

function Exercise() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif" className="App-logo" />
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