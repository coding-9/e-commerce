import React, { useState} from "react"
import Carousel from 'react-bootstrap/Carousel'


// const MyCarousel = (props) =>{
//     return (
//         <div className="myCarousel bg-danger ">
//             <div id={props.number} className="carousel slide" data-ride="carousel">
//                 <div className="carousel-inner">
//                   <div className="carousel-item carouselDiv active">
//                     <img src={require("../../assets/images/Tshirt1.jpg")} className="carouselImg" alt=""/>
//                   </div>
//                   <div className="carousel-item carouselDiv">
//                     <img src={require("../../assets/images/Tshirt2.jpg")} className="carouselImg" alt=""/>
//                   </div>
//                   <div className="carousel-item carouselDiv">
//                     <img src={require("../../assets/images/Tshirt3.jpg")} className="carouselImg" alt=""/>
//                   </div>
//                 </div>
//                 <a className="carousel-control-prev" href={props.number} role="button" data-slide="prev">
//                   <span className="carousel-control-prev-icon bg-primary p-3 rounded-circle" aria-hidden="true"></span>
//                   <span className="sr-only">Previous</span>
//                 </a>
//                 <a class="carousel-control-next" href={props.number} role="button" data-slide="next">
//                   <span className="carousel-control-next-icon bg-primary p-3 rounded-circle" aria-hidden="true"></span>
//                   <span className="sr-only">Next</span>
//                 </a>
//             </div>
//         </div>
//     )
// }

// export default MyCarousel

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
            src={require("../../assets/images/Tshirt1.jpg")}
            alt="First slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carouselDiv">
          <img
            className="d-block carouselImg"
            src={require("../../assets/images/Tshirt2.jpg")} 
            alt="Second slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carouselDiv">
          <img
            className="d-block carouselImg"
            src={require("../../assets/images/Tshirt3.jpg")} 
            alt="Third slide"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel