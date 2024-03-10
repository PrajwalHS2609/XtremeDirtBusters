import React from "react";
import style from "./accessories.module.css";
import AccessoriesQuality1 from "./AccessoriesQuality1";
import AccessoriesQuality2 from "./AccessoriesQuality2";
const Accessories = () => {
  return (
    <div className={style.accContainer} id="accessories">
      <AccessoriesQuality1 />
      <div className={style.accFakeContent}></div>
      <AccessoriesQuality2 />
    </div>
  );
};

export default Accessories;
