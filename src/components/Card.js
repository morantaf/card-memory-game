import React, { useState } from "react";
import styled from "styled-components";

const Image = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5%;

  padding: 5%;

  &.faceUp {
    background-color: white;
  }

  &.faceDown {
    background-color: #555;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default function Card({ image, hidden, index, showCard }) {
  return (
    <Container>
      {hidden ? (
        <Image className="faceDown" onClick={() => showCard(index)} />
      ) : (
        <Image className="faceUp">
          <img src={image} />
        </Image>
      )}
    </Container>
  );
}
