import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList(props) {
    const [locations, setLocations] = useState([])
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // props.match.params.id
      axios
      .get(`https://rickandmortyapi.com/api/location/`)
      .then(response => {
        const data = response.data.results
        setLocations(data)
        console.log("locations: ", data)
      })
      .catch(error => {
        console.error(error);
      });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [props.match.params.id]);

  return (
    <section className="character-list grid-view">
      {locations.map(location => {
      return (
            <LocationCard name={location.name} type={location.type} dimension={location.dimension}/>
        )
      }
      )
      }
    </section>
  );
}
