import React, { Component } from "react";
import "./Carousel.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { images } from "../data/CarouselData";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
    };
  }

  switchImage = (direction) => {
    this.setState((prevState) => {
      let newIndex;

      if (direction === "forward") {
        newIndex = (prevState.currentImageIndex + 1) % images.length;
      } else {
        newIndex =
          prevState.currentImageIndex === 0
            ? images.length - 1
            : prevState.currentImageIndex - 1;
      }

      return { currentImageIndex: newIndex };
    });
  };

  render() {
    const { currentImageIndex } = this.state;

    return (
      <div className="carousel-container">
        

        <div className="carousel-content">
          <img
            src={images[currentImageIndex].img}
            alt={images[currentImageIndex].title}
            className="carousel-image"
          />
          <div className="carousel-text">
            <h2>{images[currentImageIndex].title}</h2>
            <p>{images[currentImageIndex].subtitle}</p>
          </div>
        </div>
        <ArrowBackIosIcon
          className="carousel-arrow"
          onClick={() => this.switchImage("backward")}
        />
        <ArrowForwardIosIcon
          className="carousel-arrow"
          onClick={() => this.switchImage("forward")}
        />
      </div>
    );
  }
}

export default Carousel;
