import React from 'react';
import logo from '../logo.svg';
import './App.css';
//*the .. refers the current folders parent folder*
import CreateCard from '../components/createCard';

function App() {
{/*inside the render function, comments must be in this form or else it will be rendered*/}
  return (

    <div className="App-header">
    <h1> Welcome to Repasent </h1>
    <h2> An app  designated to help you find your representatives </h2>
      <CreateCard/>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
