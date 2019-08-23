import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './Episode.card';

export default function EpisodesList(props) {
    const [episodes, setEpisodes] = useState([])
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // props.match.params.id
      axios
      .get(`https://rickandmortyapi.com/api/episode/`)
      .then(response => {
        const data = response.data.results
        setEpisodes(data)
        console.log("episodes: ", data)
      })
      .catch(error => {
        console.error(error);
      });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [props.match.params.id]);

  return (
    <section className="episode-list grid-view">
      {/* {episodes.map(episode => {
      return (
            <EpisodeCard name={episode.name} type={location.type} dimension={location.dimension}/>
        )
      }
      )
      } */}
    </section>
  );
}
