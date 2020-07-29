import React, { useState } from "react";
import apex from "../images/icons8-apex-legends-100.png";
import assassin from "../images/icons8-assassins-creed-100.png";
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
  border-radius: 5%;
  background: rgb(2, 0, 36);
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 0%,
    rgba(24, 141, 208, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
`;

const StyledList = styled.li`
  height: 100px;
  width: 100px;
  padding: 3%;
`;

export default function Grid() {
  const cardsList = [
    {
      name: "apex",
      imgUrl: apex,
      hidden: true,
    },
    {
      name: "assassin",
      imgUrl: assassin,
      hidden: true,
    },
    {
      name: "warfare",
      imgUrl: warfare,
      hidden: true,
    },
    {
      name: "warzone",
      imgUrl: warzone,
      hidden: true,
    },
    {
      name: "counter",
      imgUrl: counterStrike,
      hidden: true,
    },
    {
      name: "final",
      imgUrl: finalFantasy,
      hidden: true,
    },
    {
      name: "fortnite",
      imgUrl: fortnite,
      hidden: true,
    },
    {
      name: "gta",
      imgUrl: gta,
      hidden: true,
    },
    {
      name: "apex",
      imgUrl: apex,
      hidden: true,
    },
    {
      name: "assassin",
      imgUrl: assassin,
      hidden: true,
    },
    {
      name: "warfare",
      imgUrl: warfare,
      hidden: true,
    },
    {
      name: "warzone",
      imgUrl: warzone,
      hidden: true,
    },
    {
      name: "counter",
      imgUrl: counterStrike,
      hidden: true,
    },
    {
      name: "final",
      imgUrl: finalFantasy,
      hidden: true,
    },
    {
      name: "fortnite",
      imgUrl: fortnite,
      hidden: true,
    },
    {
      name: "gta",
      imgUrl: gta,
      hidden: true,
    },
  ];

  function shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex--);

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  const shuffledCardsList = shuffle(cardsList);

  const [displayedCards, setDisplayedCards] = useState(shuffledCardsList);

  const showCard = (indexOfClickedCard) => {
    setDisplayedCards(
      displayedCards.map((card, index) =>
        index === indexOfClickedCard ? { ...card, hidden: !card.hidden } : card
      )
    );
  };

  return (
    <Container>
      {displayedCards.map((card, index) => (
        <StyledList>
          <Card
            key={index}
            image={card.imgUrl}
            hidden={card.hidden}
            index={index}
            showCard={showCard}
          />
        </StyledList>
      ))}
    </Container>
  );
}
