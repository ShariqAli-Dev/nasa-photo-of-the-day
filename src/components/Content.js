import React from 'react';

export default function Content(props) {
  const { nasaData } = props;
  const { hdurl, explanation, title, date } = nasaData;

  return (
    <div>
      <img src={hdurl} alt={'imageOfTheday'}/>
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{explanation}</p>
    </div>
  );
}