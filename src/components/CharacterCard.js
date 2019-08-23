import React from "react";
import styled from "styled-components";

const Card = styled.div`
width: 30%;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid lightgrey;
  border-radius: 5px;
`

const Image = styled.img`
  width: 100%;
`


export default function CharacterCard(props) {
  return (
      <Card >
        <Image src={props.image} alt="character's image" />
        <h3>{props.name}</h3>
        <p>{props.species} {props.status}</p>
        <p>{props.location}</p>
      </Card>
    )
}