import React from "react";
import apex from "../images/icons8-apex-legends-100.png";
import assasin from "../images/icons8-assassins-creed-100.png";
import warfare from "../images/icons8-call-of-duty-modern-warfare-100.png";
import warzone from "../images/icons8-call-of-duty-warzone-100.png";
import counterStrike from "../images/icons8-counter-strike-100.png";
import finalFantasy from "../images/icons8-final-fantasy-xiv-100.png";
import fortnite from "../images/icons8-fortnite-100.png";
import gta from "../images/icons8-gta-5-100.png";
import Card from "./Card";
import styled from "styled-components";

const Container = styled.ul`
  margin: auto;
  width: 650px;
  height: 650px;
  display: flex;
  flex-wrap: wrap;
  background-color: #ffffff;
  list-style: none;
  padding: 32px;
  justify-content: space-between;
`;

const StyledLi = styled.li`
  height: 100px;
  width: 100px;
  padding: 3%;
`;

export default function Grid() {
  const logoArray = [
    apex,
    assasin,
    warfare,
    warzone,
    counterStrike,
    finalFantasy,
    fortnite,
    gta,
    apex,
    assasin,
    warfare,
    warzone,
    counterStrike,
    finalFantasy,
    fortnite,
    gta,
  ];

  function shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle…
    while (currentIndex) {
      // Pick a remaining element…
      randomIndex = Math.floor(Math.random() * currentIndex--);

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  const shuffledArray = shuffle(logoArray);

  return (
    <Container>
      {shuffledArray.map((logo, index) => (
        <StyledLi>
          <Card key={index} image={logo} />
        </StyledLi>
      ))}
    </Container>
  );
}
