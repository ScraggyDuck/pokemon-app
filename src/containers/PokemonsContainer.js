import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/getPokemons';
import Pokemon from '../components/pokemon';

export function PokemonsContainer () {
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, { variables: { first: 9 } });
    return (
        <div className="pokemons-container">
            {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
        </div>
    )
}