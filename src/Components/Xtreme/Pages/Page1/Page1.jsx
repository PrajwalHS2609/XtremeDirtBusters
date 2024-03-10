import React, { useState } from "react";
import style from "./page1.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const Page1 = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={style.page1Container} id="page1">
      <Carousel className={style.slideShow} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img id={style.pg1img} src="./Pics/Xtreme1.jpg" alt="" />
          {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img id={style.pg1img2} src="./Pics/CarAccessories.jpg" alt="" />
          {/* <Carousel.Caption id={style.pg1Caption}>
            <div className={style.pg1SeeMore}>See More</div>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img id={style.pg1img2} src="./Pics/CarWash.jpg" alt="" />
          {/* <Carousel.Caption id={style.pg1Caption}>
            <div className={style.pg1SeeMore}>See More</div>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Page1;
