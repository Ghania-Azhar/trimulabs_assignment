import { Card, CardHeader, CardBody, Heading, Button } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function PokemonInfo({ pokemon, isDetail, isList = false }) {
  return (
    <Fragment>
      <Card m={3} bgColor="#f3f3f3" variant="elevated">
        <CardHeader>
          <Heading>{pokemon.key.toUpperCase()}</Heading>
        </CardHeader>

        <CardBody>
          <p><b>Abilities: </b>{pokemon.abilities.first.name ? pokemon.abilities.first.name : "N/A"}</p>
          <p><b>Base Specie:</b> {pokemon.baseSpecies ? pokemon.baseSpecies : "N/A"}</p>
          <p><b>Color: </b> {pokemon.color}</p>
          {isDetail ? (

            <>
              <p>
                <b>Height: </b> {pokemon.height}
              </p>
              <p>
                <b>IsEggObtainable: </b> {pokemon.isEggObtainable ? pokemon.isEggObtainable : "N/A"}
              </p>
              <p>
                <b>Weight: </b> {pokemon.weight}
              </p>
              <p>
                <b>SmogonTier: </b> {pokemon.smogonTier}
              </p>
              <p>
                <b>Other Form: </b> {pokemon.otherFormes ? pokemon.otherFormes.map((form, index) => {
                  return <li key={index}>{form}</li>
                }) : "N/A"}
              </p>
              <p>
                <b>Types: </b> {pokemon.types ? pokemon.types.map((type, index) => {
                  return <li key={index}>{type.name}</li>
                }) : "N/A"}
              </p>


            </>
          ) : ""
          }

          {
            isList
              ? (
                <Link
                  to={{
                    pathname: `/detail/${pokemon["key"]}`,
                    query: pokemon["key"],
                  }}
                >
                  <Button bgColor="#dbdbdb">
                    Details
                  </Button>
                </Link>
              ) : ""
          }
        </CardBody>
      </Card>
    </Fragment>
  )
};

export default PokemonInfo;