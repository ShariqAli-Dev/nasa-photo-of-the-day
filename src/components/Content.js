import React from "react";

export default function Content(props) {
  const { nasaData } = props;
  const { hdurl, explanation, title, date } = nasaData;

  return (
    <div>
      <img src={hdurl} alt={"imageOfTheday"} id={"dailyImage"} />
      <h2>{title}</h2>
      <p>
        <strong>Explanation: </strong>
        {explanation}
      </p>
    </div>
  );
}
