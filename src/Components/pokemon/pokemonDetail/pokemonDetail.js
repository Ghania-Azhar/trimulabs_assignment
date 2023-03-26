import React from "react";
import { useQuery } from "@apollo/client";
import { LOAD_POKEMONS } from "../../../Graphql/queries";
import { useNavigate } from "react-router-dom";
import PokemonInfo from "../pokemonInfo/pokemonInfo";
import { Box, Button, Center } from "@chakra-ui/react";

function PokemonDetail() {
  const navigate = useNavigate();
  const id = window.location.pathname.split("/")[2];
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
  const filterPokemon = data["getAllPokemon"].filter((pokemon) =>
    pokemon.key.toLowerCase() === id);

  const renderPokemonData = data => {
    return filterPokemon.map((pokemon, index) => {
      return (
        <Box key={index}>
          <PokemonInfo pokemon={pokemon} isDetail={true} />
          <Button
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </Box>
      );
    });
  };
  return <Center>{data ? renderPokemonData(data) : null}</Center>;
}
export default PokemonDetail;