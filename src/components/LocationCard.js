import React from "react";
import styled from "styled-components";


const Card = styled.div`
    border: 1px solid lightgrey;
    border-radius: 5px;
    margin: 20px auto;
    width: 200px;
    padding: 10px;
`






export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <Card>
      <h3>{name}</h3>
      <p>{type} - {dimension}</p>
      <p>{residents}</p>
    </Card>

    )
}
