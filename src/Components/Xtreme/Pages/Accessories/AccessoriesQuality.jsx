import React from "react";
import style from "./accessories.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const AccessoriesQuality = () => {
  return (
    <div className={style.accQualityContainer}>
      <div className={style.accQualityContent1}>
        <h1>Best Quality Standards </h1>
      </div>
      <div className={style.accQualityContent2}>
        <p>
          Our service station upholds the best quality standards through skilled
          technicians, genuine parts, advanced equipment, comprehensive
          inspections, transparent communication, timely service, and a
          commitment to customer satisfaction.
        </p>
      </div>
      <div className={style.accQualityContent3}>
        <div className={style.accQualityItem}>
          <div className={style.accQualityIcon}>
            <FontAwesomeIcon
              icon={faCheck}
              className={style.accIcon}
            ></FontAwesomeIcon>
          </div>
          <div className={style.accQualityTxt}>
            <p>100% genuine auto parts</p>
          </div>
        </div>
        <div className={style.accQualityItem}>
          <div className={style.accQualityIcon}>
            <FontAwesomeIcon
              icon={faCheck}
              className={style.accIcon}
            ></FontAwesomeIcon>
          </div>
          <div className={style.accQualityTxt}>
            <p>Dealership quality repair</p>
          </div>
        </div>
        <div className={style.accQualityItem}>
          <div className={style.accQualityIcon}>
            <FontAwesomeIcon
              icon={faCheck}
              className={style.accIcon}
            ></FontAwesomeIcon>
          </div>
          <div className={style.accQualityTxt}>
            <p>Service contract & warranty plans</p>
          </div>
        </div>
        <div className={style.accQualityItem}>
          <div className={style.accQualityIcon}>
            <FontAwesomeIcon
              icon={faCheck}
              className={style.accIcon}
            ></FontAwesomeIcon>
          </div>
          <div className={style.accQualityTxt}>
            <p>Dedicated team providing genuine advice</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesQuality;
