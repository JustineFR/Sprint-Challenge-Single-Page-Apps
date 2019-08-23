import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
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

