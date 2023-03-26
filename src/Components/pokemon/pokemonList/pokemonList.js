import React from "react";
import { useQuery } from "@apollo/client";
import { LOAD_POKEMONS } from "../../../Graphql/queries";
import PokemonInfo from "../pokemonInfo/pokemonInfo";
import { Box } from "@chakra-ui/react";
// import "./List.scss";


function PokemonList({ searchQuery }) {
  // Fetching all pokemons
  const { error, loading, data } = useQuery(LOAD_POKEMONS);

  // Display error message in case of any error
  if (error) {
    return (
      <div class="alert alert-warning" role="alert">
        {error.message}
      </div>
    );
  }

  // Show spinner till data not fetched
  if (loading) {
    return (
      <div className="spinner-border jobs-ldng" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  // Filter the Pokemons based on the search query
  // Filtering is done on the basis of Pokemon Name 
  const filterPokemons = data["getAllPokemon"].filter((pokemon) =>
    pokemon.key.toLowerCase().includes(searchQuery.toLowerCase()));
  const renderPokemonData = data => {
    return filterPokemons.map((pokemon, index) => {
      return (
        <Box key={index}>
          <PokemonInfo pokemon={pokemon} isList={true} />
        </Box>
      );
    });
  };
  return <div>{data ? renderPokemonData(data) : null}</div>;
};
export default PokemonList;