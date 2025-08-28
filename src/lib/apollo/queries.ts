import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharacters {
    allPeople {
      people {
        id
        name
        birthYear
        eyeColor
        gender
        hairColor
        height
        mass
        skinColor
        homeworld {
          name
        }
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    person(id: $id) {
      id
      name
      birthYear
      eyeColor
      gender
      hairColor
      height
      mass
      skinColor
      homeworld {
        id
        name
        terrains
        population
      }
      filmConnection {
        totalCount
        films {
          id
          title
          episodeID
          releaseDate
          director
        }
      }
      vehicleConnection {
        totalCount
        vehicles {
          id
          name
          model
        }
      }
      starshipConnection {
        totalCount
        starships {
          id
          name
          model
        }
      }
    }
  }
`;
