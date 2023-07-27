import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

// loading the sass style fot the component
import "./index.scss";

function CarouselComp(props) {
  const { className = "", children, ...other } = props;

  return (
    <div className={"organism__carousel-container " + className} {...other}>
      <Carousel
        slidesPerPage={3}
        slidesPerScroll={1}
        infinite
        clickToChange
        arrows
        keepDirectionWhenDragging
        className={className}
        autoPlay={12000}
        animationSpeed={500}
      >
        {children}
      </Carousel>
    </div>
  );
}

export default CarouselComp;
