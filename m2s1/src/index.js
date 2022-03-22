import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*function Hehe() {
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
}*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//export default Hehe