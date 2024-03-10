import React from "react";
import style from "./map.module.css"
const Map = () => {
  return (
    <div className={style.mapContainer} id="location">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d264.46737839164155!2d77.49916624277103!3d13.034871677201606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d41bd4165d3%3A0xdade12197019ed6!2sXtreme%20Dirt%20Busters!5e0!3m2!1sen!2sin!4v1708347179854!5m2!1sen!2sin"
      
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
