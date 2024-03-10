import React, { useState } from "react";
import style from "./accessories.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
const AccessoriesQuality2 = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className={style.acc2Container}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            id={style.accimg}
            src="https://media.istockphoto.com/id/484020736/photo/car-spoiler.jpg?s=612x612&w=0&k=20&c=JBxyVTYAGSPgJ_qzsIy-7PFxS0gp0MvnTWbGcGLNZIg="
            alt=""
          />
          {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            id={style.accimg}
            src="https://media.istockphoto.com/id/960370144/photo/wheel-rims-on-showcase.jpg?s=612x612&w=0&k=20&c=ANUA5NJLk8ZIJRydusomIK2uZ4gHPRxxslY801kWBx4="
            alt=""
          />
          {/* <Carousel.Caption id={style.pg1Caption}>
            <div className={style.pg1SeeMore}>See More</div>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            id={style.accimg}
            src="https://media.istockphoto.com/id/1191247832/photo/clean-black-leather-car-floor-mats-with-diamond-red-stitching-and-gas-pedals-and-brakes-in.jpg?s=612x612&w=0&k=20&c=tleF-F2tn1ltPvQ0nCdhoNno_0GXbt7DFNAZd2BVl5I="
            alt=""
          />
          {/* <Carousel.Caption id={style.pg1Caption}>
            <div className={style.pg1SeeMore}>See More</div>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            id={style.accimg}
            src="https://media.istockphoto.com/id/471084125/photo/stick-shift.jpg?s=612x612&w=0&k=20&c=rntYOxjdNu23iAPFJBSKdVZuJCOZ1Z90iuY8fYe2_Ow="
            alt=""
          />
          {/* <Carousel.Caption id={style.pg1Caption}>
            <div className={style.pg1SeeMore}>See More</div>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default AccessoriesQuality2;
