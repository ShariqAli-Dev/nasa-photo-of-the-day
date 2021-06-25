import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  h1 {
    color: #061f4a;
    border: dotted white 12px;
    padding: 10px;
  }

  #dateP {
    font-weight: bold;
    color: #323a45;
  }
`;

export default function Header(props) {
  const { nasaData } = props;
  const { date } = nasaData;
  return (
    <StyledDiv>
      <h1>Nasa's Image Of The Day!</h1>
      <p>Every day this website will have updated information about the image, name, date, and explanation of the topic. Everything is aimed into showing something new and interesting to whoever chooses to visit this</p>
      <p id="dateP">{date}</p>
    </StyledDiv>
  );
}
