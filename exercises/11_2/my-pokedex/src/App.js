import React from 'react';
import './App.css';
import Pokedex from './Pokedex';
import './App.css';
// import Pokemon from './Pokemon';
import data from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <img class='title' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png' alt='Title' />
        <Pokedex pokemon={data} />
      </div>
    );
  }
}

export default App;

