import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {
  const [characters, setCharacters] = useState([])
  // TODO: Add useState to track data from useEffect
// console.log("result: ", props)
  useEffect(() => {
      // const id = props.match.params.id;
      axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        const data = response.data.results
        setCharacters(data)
        // console.log("data: ", data)
      })
      .catch(error => {
        console.error(error);
      });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [props.match.params.id]);

  return (
    <section className="character-list grid-view">
      {characters.map(character => {
        return (
          <CharacterCard name={character.name} image={character.image} species={character.species} status={character.status} />
        )
      }
      )
    } 
    </section>
  );
}

