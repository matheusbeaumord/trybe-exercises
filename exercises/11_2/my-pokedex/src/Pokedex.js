import React from 'react';
import Pokemon from './Pokemon';
// import PropTypes from 'prop-types';
/**Pokedex: esse componente representa a enciclopédia de pokemons. Esse componente recebe como entrada uma lista de pokemons para serem mostrados na tela. Para cada um desses pokemons recebidos, Pokedex chama o componente Pokemon. */
class Pokedex extends React.Component {
    render() {
      const { games } = this.props;
      return (
        <div class = 'pokedex-list'>
        {games.map((xablau2, index) => <Pokemon key={index} pokemonList={xablau2} />)}
      </div>
      )
    }}
export default Pokedex;