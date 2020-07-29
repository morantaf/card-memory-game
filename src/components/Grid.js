import React, { useState, useEffect } from "react";
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
      isFlipped: false,
      isMatched: false,
    },
    {
      name: "assassin",
      imgUrl: assassin,
      isFlipped: false,
      isMatched: false,
    },
    {
      name: "warfare",
      imgUrl: warfare,
      isFlipped: false,
      isMatched: false,
    },
    {
      name: "warzone",
      imgUrl: warzone,
      isFlipped: false,
      isMatched: false,
    },
    {
      name: "counter",
      imgUrl: counterStrike,
      isFlipped: false,
      isMatched: false,
    },
    {
      name: "final",
      imgUrl: finalFantasy,
      isFlipped: false,
      isMatched: false,
    },
    {
      name: "fortnite",
      imgUrl: fortnite,
      isFlipped: false,
      isMatched: false,
    },
    {
      name: "gta",
      imgUrl: gta,
      isFlipped: false,
      isMatched: false,
    },
    {
      name: "apex",
      imgUrl: apex,
      isFlipped: false,
      isMatched: false,
    },
    {
      name: "assassin",
      imgUrl: assassin,
      isFlipped: false,
      isMatched: false,
    },
    {
      name: "warfare",
      imgUrl: warfare,
      isFlipped: false,
      isMatched: false,
    },
    {
      name: "warzone",
      imgUrl: warzone,
      isFlipped: false,
      isMatched: false,
    },
    {
      name: "counter",
      imgUrl: counterStrike,
      isFlipped: false,
      isMatched: false,
    },
    {
      name: "final",
      imgUrl: finalFantasy,
      isFlipped: false,
      isMatched: false,
    },
    {
      name: "fortnite",
      imgUrl: fortnite,
      isFlipped: false,
      isMatched: false,
    },
    {
      name: "gta",
      imgUrl: gta,
      isFlipped: false,
      isMatched: false,
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

  const [allFlippedCards, setAllFlippedCards] = useState([]);

  const showCard = (indexOfClickedCard) => {
    const flippedCard = displayedCards.filter(
      (card, index) => index === indexOfClickedCard
    );

    setAllFlippedCards([...allFlippedCards, flippedCard]);

    setDisplayedCards(
      displayedCards.map((card, index) =>
        index === indexOfClickedCard
          ? { ...card, isFlipped: !card.isFlipped }
          : card
      )
    );
  };

  const checkFlippedCards = (card1, card2) => {
    if (card1.name === card2.name) {
      setDisplayedCards(
        displayedCards.map((card) =>
          card.name === card1.name
            ? {
                ...card,
                isMatched: true,
                isFlipped: false,
              }
            : card
        )
      );
      setAllFlippedCards([]);
    }
  };

  console.log(displayedCards);

  useEffect(() => {
    if (allFlippedCards.length === 2) {
      checkFlippedCards(allFlippedCards[0], allFlippedCards[1]);
    }
  }, [allFlippedCards]);

  return (
    <Container>
      {displayedCards.map((card, index) => (
        <StyledList>
          <Card
            key={index}
            name={card.name}
            image={card.imgUrl}
            isFlipped={card.isFlipped}
            index={index}
            showCard={showCard}
          />
        </StyledList>
      ))}
    </Container>
  );
}
