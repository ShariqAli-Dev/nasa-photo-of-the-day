import React from 'react';

export default function Header(props) {
  const { nasaData } = props;
  const { title, date } = nasaData;
  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
    </div>
  );
}