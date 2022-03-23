//import logo from './logo.svg';
import './App.css';
import {data} from './data.js';

function App() {
  return (
    <body>
      <div className="App">
        <div className="App-header">
        </div>
        <div className="App-main">
          <p className="App-mainTitle">Song Info</p>
          <div className="App-mainTrack">
            <img src = "https://i.scdn.co/image/ab67616d00001e02e8b066f70c206551210d902b" className="App-mainImg"/>
            <p className="App-mainDesc">
              <span className="App-mainSong">{data.album.name}</span><br></br>
              <span className="App-mainArtist">Queen</span>  
            </p>
            <button className="btn btn-select">Select</button>
          </div>     
        </div>
      </div>
    </body>
  );
}
console.log(data.album);
console.log(data.artists);
export default App;
