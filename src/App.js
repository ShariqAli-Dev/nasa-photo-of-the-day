import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import styled from "styled-components";

import Header from "./components/Header";
import Content from "./components/Content";

const StyledApp = styled.div`
  text-align: center;
  width: 60%;
  margin: auto;
  font-size: 1.25rem;
`;

function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=CHlgRJCtPYKSYJwYQzcfFLsiQcz8fh5gUwRk3GPF")
      .then((request) => {
        console.log(request.data);
        setNasaData(request.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <StyledApp className="App">
      <Header nasaData={nasaData} />
      <Content nasaData={nasaData} />
    </StyledApp>
  );
}

export default App;
