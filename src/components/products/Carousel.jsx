import React, { useState} from "react"
import Carousel from 'react-bootstrap/Carousel'

function MyCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel interval={null} indicators={false} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="carouselDiv">
          <img
            className="d-block carouselImg"
            src={require("../../images/Tshirt1.jpg")}
            alt="First slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carouselDiv">
          <img
            className="d-block carouselImg"
            src={require("../../images/Tshirt2.jpg")} 
            alt="Second slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carouselDiv">
          <img
            className="d-block carouselImg"
            src={require("../../images/Tshirt3.jpg")} 
            alt="Third slide"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel