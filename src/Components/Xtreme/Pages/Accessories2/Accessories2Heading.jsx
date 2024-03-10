import React from "react";
import style from "./acc2.module.css";
import { NavLink } from "react-router-dom";
import  "./acc2.css"

const Accessories2Heading = () => {
  return (
    <div className={style.acc2HeadingContainer}>
      <div className={style.acc2HeadingContent} id="acc2HeadingContent1">
        <h2>
          <NavLink to={"/"}>Interior Accessories</NavLink>
        </h2>
      </div>
      <div className={style.acc2HeadingContent} id="acc2HeadingContent2">
        <h2>
          <NavLink to={"/exterior"}>Exterior Accessories</NavLink>
        </h2>
      </div>
      <div className={style.acc2HeadingContent} id="acc2HeadingContent3">
        <h2>
          <NavLink to={"/electric"}>Electric Car Accessories</NavLink>
        </h2>
      </div>
      <div className={style.acc2HeadingContent} id="acc2HeadingContent4">
        <h2>
        
          <NavLink to={"/safety"}>Safety Accessories</NavLink>
        </h2>
      </div>
    </div>
  );
};

export default Accessories2Heading;
