import React from 'react';

export default function Header(props) {
  const { nasaData } = props;
  const { date } = nasaData;
  return (
    <div>
      <h1>Nasa's Image Of The Day!</h1>
      <p>Every day this website will have updated information about the image, name, date, and explanation of the topic. Everything is aimed into showing something new and interesting to whoever chooses to visit this</p>
      <p>{date}</p>
    </div>
  );
}