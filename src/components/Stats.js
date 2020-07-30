import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 650px;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
`;

export default function Stats({ time, wrongAttempts }) {
  return (
    <Container>
      <p>
        <b>Timer</b> : {time.minutes >= 10 ? time.minutes : "0" + time.minutes}:
        {time.seconds >= 10 ? time.seconds : "0" + time.seconds}
      </p>
      <p>
        <b>Wrong attempts</b> : {wrongAttempts}
      </p>
    </Container>
  );
}
