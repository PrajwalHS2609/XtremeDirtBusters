import React from "react";
import style from "./lastBlock.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const LastBlock = () => {
  return (
    <div className={style.lastBlockContainer} id="contact">
      <div className={style.lastContent}>
        <div className={style.lastItem1}>
          <FontAwesomeIcon
            icon={faPhone}
            className={style.lastIcon}
          ></FontAwesomeIcon>
        </div>
        <div className={style.lastItem2}>+91 9999999999 / +91 8888888888</div>
      </div>
      <div className={style.lastContent}>
        <div className={style.lastItem3}>
          <div className={style.lastBrandIcon}>
            <FontAwesomeIcon
              icon={faInstagram}
              className={style.brandIcon}
            ></FontAwesomeIcon>
          </div>
          <div className={style.lastBrandIcon}>
            <FontAwesomeIcon
              icon={faFacebook}
              className={style.brandIcon}
            ></FontAwesomeIcon>
          </div>

          <div className={style.lastBrandIcon}>
          <FontAwesomeIcon
              icon={faXTwitter}
              className={style.brandIcon}
            ></FontAwesomeIcon>
          </div>
          <div className={style.lastBrandIcon}>
            <FontAwesomeIcon
              icon={faEnvelope}
              className={style.brandIcon}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastBlock;
