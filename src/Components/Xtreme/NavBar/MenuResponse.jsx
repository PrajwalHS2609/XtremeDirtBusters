import React from "react";
import style from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCar,
  faWandMagic,
  faIdCard,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";

const MenuResponsive = () => {
  return (
    <div className={style.menuRespContainer}>
      <div className={style.bar} id={style.bar1}></div>
      <div className={style.bar} id={style.bar2}></div>
      <div className={style.bar} id={style.bar3}></div>
      <div className={style.menuRespContent}>
        <div className={style.menuRespItem}>
          <div className={style.menuRespItemIcon}>
            <FontAwesomeIcon
              icon={faHome}
              className={style.menuRespicon}
            ></FontAwesomeIcon>
          </div>
          <div className={style.menuRespItemTxt}>
            <HashLink to="#page1">Home</HashLink>
          </div>
        </div>
        <div className={style.menuRespItem}>
          <div className={style.menuRespItemIcon}>
            <FontAwesomeIcon
              icon={faCar}
              className={style.menuRespicon}
            ></FontAwesomeIcon>
          </div>
          <div className={style.menuRespItemTxt}>
            <HashLink to="#carcare">Car Care</HashLink>
          </div>
        </div>
        <div className={style.menuRespItem}>
          <div className={style.menuRespItemIcon}>
            <FontAwesomeIcon
              icon={faWandMagic}
              className={style.menuRespicon}
            ></FontAwesomeIcon>
          </div>
          <div className={style.menuRespItemTxt}>
            <HashLink to="#accessories">Accessories</HashLink>
          </div>
        </div>
        <div className={style.menuRespItem}>
          <div className={style.menuRespItemIcon}>
            <FontAwesomeIcon
              icon={faIdCard}
              className={style.menuRespicon}
            ></FontAwesomeIcon>
          </div>
          <div className={style.menuRespItemTxt}>
            <HashLink to="#about">About</HashLink>
          </div>
        </div>
        <div className={style.menuRespItem}>
          <div className={style.menuRespItemIcon}>
            <FontAwesomeIcon
              icon={faLocationPin}
              className={style.menuRespicon}
            ></FontAwesomeIcon>
          </div>
          <div className={style.menuRespItemTxt}>
            <HashLink to="#location">Location</HashLink>
          </div>
        </div>
        <div className={style.menuRespItem}>
          <div className={style.menuRespItemIcon}>
            <FontAwesomeIcon
              icon={faPhone}
              className={style.menuRespicon}
            ></FontAwesomeIcon>
          </div>
          <div className={style.menuRespItemTxt}>
            <HashLink to="#contact">Contact</HashLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuResponsive;
