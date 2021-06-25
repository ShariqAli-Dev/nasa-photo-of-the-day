import React from "react";

import styled from "styled-components";

const StyledDiv = styled.div`
  h2 {
    color: #212121;
  }

  img {
    height: 80%;
    width: 80%;
  }
`;

export default function Content(props) {
  const { nasaData } = props;
  const { hdurl, explanation, title, date } = nasaData;

  return (
    <StyledDiv>
      <img src={hdurl} alt={"imageOfTheday"} />
      <h2>{title}</h2>
      <p>
        <strong>Explanation: </strong>
        {explanation}
      </p>
    </StyledDiv>
  );
}
