import React from 'react';
import PropTypes from 'prop-types';

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

Pokemon.propTypes = {
	pokemonList: PropTypes.arrayOf(PropTypes.shape({
			name: PropTypes.string,
			type: PropTypes.string,
			averageWeight: PropTypes.arrayOf(PropTypes.shape({
					value: PropTypes.number,
					measurementUnit: PropTypes.string
			}))   
	}))
}

Pokemon.defaultProps = {
	pokemonList: []
}