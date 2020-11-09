import React from 'react';
// import PropTypes from 'prop-types';

class Pokemon extends React.Component {
	render() {
		const { image, name, type, averageWeight } = this.props.pokemonList;

		return (
			<div>
			<img src={image} alt='Pokemon'/>
      <p>{name}</p> 
			<p>{type}</p> 
			<p>{averageWeight.value} {averageWeight.measurementUnit}</p>
			</div>
		)
	}
}

export default Pokemon;

/** nome do pokemon;
tipo do pokemon;
peso médio do pokemon, acompanhado da unidade de medida usada;
imagem do pokemon. */