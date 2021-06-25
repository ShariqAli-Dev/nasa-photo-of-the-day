import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  color: #061f4a;
  border: dotted white 12px;
  padding: 10px;
`;

export default function Header(props) {
  const { nasaData } = props;
  const { date } = nasaData;
  return (
    <div>
      <StyledH1>Nasa's Image Of The Day!</StyledH1>
      <p>Every day this website will have updated information about the image, name, date, and explanation of the topic. Everything is aimed into showing something new and interesting to whoever chooses to visit this</p>
      <p>{date}</p>
    </div>
  );
}
