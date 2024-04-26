import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./Carousel.css";

function Carousel({ data }) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
      {data.map((item, ind) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={ind}
            className={slide === ind ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nextSlide}
      />
      <span className="indicators">
        {data.map((_, ind) => {
          return (
            <button
              key={ind}
              onClick={() => setSlide(ind)}
              className={
                slide === ind ? "indicator" : "indicator indicator-inactive"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
}

export default Carousel;
