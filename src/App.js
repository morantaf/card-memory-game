import React, { useState, useEffect } from "react";
import Grid from "./components/Grid";
import Stats from "./components/Stats";
import styled from "styled-components";

const Title = styled.h1`
  margin: auto;
  width: 650px;
  text-align: center;
`;

function App() {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });
  const [wrongAttempts, setWrongAttempts] = useState(0);

  let updatedSeconds = time.seconds,
    updatedMinutes = time.minutes;

  const chrono = () => {
    if (updatedSeconds === 60) {
      updatedMinutes++;
      updatedSeconds = 0;
    }
    updatedSeconds++;

    return setTime({ minutes: updatedMinutes, seconds: updatedSeconds });
  };

  useEffect(() => {
    chrono();
    setInterval(chrono, 1000);
  }, []);

  return (
    <div className="App">
      <Title>Card Memory Game</Title>
      <Stats wrongAttempts={wrongAttempts} time={time} />
      <Grid setWrongAttempts={setWrongAttempts} wrongAttempts={wrongAttempts} />
    </div>
  );
}

export default App;
