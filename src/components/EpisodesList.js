import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './Episode.card';

export default function EpisodesList(props) {
    const [episodes, setEpisodes] = useState([])

  useEffect(() => {
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
  }, [props.match.params.id]);

  return (
    <section className="episode-list grid-view">
      {episodes.map(episode => {
      return (
            <EpisodeCard name={episode.name} episode={episode.episode} air_date={episode.air_date}/>
        )})}
    </section>
  );
}
