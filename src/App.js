import React, {useEffect, useState} from "react";
import axios from 'axios'
import "./App.css";

import Header from "./components/Header";

function App() {
  const [nasaData, setNasaData] = useState(null);

  // useEffect(() => {
  //   const fetchNasa = () => {
  //     axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  //     .then(request => {
  //       setNasaData(request.data)
  //     })
  //     .catch(error => console.log(error));
  //   }

  //   fetchNasa();
  // }, []);


  return (
    <div className="App">
      <Header nasaData={nasaData}/>
    </div>
  );
}

export default App;
