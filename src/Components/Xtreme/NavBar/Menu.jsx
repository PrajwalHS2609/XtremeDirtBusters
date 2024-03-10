import React from "react";
import style from "./navbar.module.css";
import { HashLink } from "react-router-hash-link";
const Menu = () => {
  return (
    <div className={style.menuContainer}>
      <div className={style.menuContent}><HashLink to="#page1">Home</HashLink></div>
      <div className={style.menuContent}><HashLink to="#carcare">Car Care</HashLink></div>
      <div className={style.menuContent}><HashLink to="#accessories">Accessories</HashLink></div>
      <div className={style.menuContent}><HashLink to="#about">About</HashLink></div>
      <div className={style.menuContent}><HashLink to="#location">Location</HashLink></div>
      <div className={style.menuContent}><HashLink to="#contact">Contact</HashLink></div>
    </div>
  );
};
export default Menu;
