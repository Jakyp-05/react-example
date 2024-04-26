import React from "react";
import Carousel from "./components/carousel/Carousel";

import { slides } from "./data/Carousel.json";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Carousel data={slides} />
    </div>
  );
}

export default App;
