import './App.css';
import {data} from './data.js';
import Trackinfo from './components/Trackinfo';
import Selectbutton from './components/Selectbtn';
import React from 'react';

function App() {
  return (
    <body>
      <div className="App">
        <div className="App-header">
        </div>
        <div className="App-main">
          <Trackinfo />
          <Selectbutton />    
        </div>
        <div className="App-footer">
        </div>
      </div>
    </body>
  );
}
console.log(data.album);
console.log(data.artists);
export default App;
