import React, {useEffect, useState} from "react";
import axios from 'axios'
import "./App.css";

import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=CHlgRJCtPYKSYJwYQzcfFLsiQcz8fh5gUwRk3GPF')
      .then(request => {
        console.log(request.data);
        setNasaData(request.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <Header nasaData={nasaData} />
      <Content nasaData={nasaData} />
    </div>
  );
}

export default App;
