import React from "react";
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

export default function Card({
  image,
  isFlipped,
  index,
  showCard,
  name,
  isMatched,
}) {
  return (
    <Container>
      {isFlipped || isMatched ? (
        <Image className="faceUp">
          <img alt={`${name}-${index}`} src={image} />
        </Image>
      ) : (
        <Image className="faceDown" onClick={() => showCard(index)} />
      )}
    </Container>
  );
}
