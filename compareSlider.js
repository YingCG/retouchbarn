import React from "react";
import ImageSlider from "react-image-comparison-slider";

import "./styles.css";

import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";

export default function App() {
  return (
    <div className="App">
      <div style={{ width: 700, height: 450 }}>
        <ImageSlider
          image1={img1}
          image2={img2}
          sliderWidth={3}
          sliderColor="white"
          handleColor="white"
          handleBackgroundColor="white"
        />
      </div>
    </div>
  );
}