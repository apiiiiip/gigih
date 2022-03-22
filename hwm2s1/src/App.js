//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
      <div className="App">
        <div className="App-header">
        </div>
        <div className="App-main">
          <p className="App-mainTitle">Song Info</p>
          <div className="App-mainTrack">
            <img src ="https://i.scdn.co/image/ab67616d00001e02e8b066f70c206551210d902b" className="App-mainImg"/>
            <p className="App-mainDesc">
              <span className="App-mainSong">Bohemian Rhapsody (The Original Soundtrack)</span><br></br>
              <span className="App-mainArtist">Queen</span>  
            </p>
            <button className="btn btn-select">Select</button>
          </div>     
        </div>
      </div>
    </body>
  );
}

export default App;
