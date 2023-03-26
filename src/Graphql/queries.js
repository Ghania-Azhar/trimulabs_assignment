import { gql } from "@apollo/client";

// GraphQL query to fetch the first 50 pokemons
export const LOAD_POKEMONS = gql`
query{
  getAllPokemon(offset: 0 , take: 50) {
    key
    abilities {
      first {
        name
      }
      second {
        name
      }
      special {
        name
      }
    } 
    color
    baseForme
    baseSpecies
    baseStats {
      attack
    }
    weight
    types {
      name
    }
    baseStatsTotal
    bulbapediaPage
    catchRate {
      base
    }
    species
    smogonTier
    otherFormes
    minimumHatchTime
    maximumHatchTime
    isEggObtainable
    height
    gender {
      female
      male
    }
  }
}
`;