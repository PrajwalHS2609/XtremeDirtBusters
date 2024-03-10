import React from "react";
import style from "./about.module.css";
import AboutHeading from "./AboutHeading";
const About = () => {
  return (
    <div className={style.aboutContainer} id="about">
      <div className={style.aboutContent} id={style.aboutContent1}>
        <img
          className={style.aboutImg1}
          src="https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdoZWVsfGVufDB8fDB8fHww"
          alt=""
          srcset=""
        />
      </div>
      <div className={style.aboutContent} id={style.aboutContent2}>
        <AboutHeading />
        <div className={style.aboutContentTxt}>
          <ul>
            <li>
              At our service station, we prioritize providing high-quality
              service to ensure your vehicle runs smoothly and reliably.
            </li>
            <li>
              Our team of experienced and skilled technicians is dedicated to
              diagnosing and addressing any issues your vehicle may have
              promptly and efficiently.
            </li>
            <li>
              From routine maintenance tasks like oil changes and tire rotations
              to more complex repairs, we offer a wide range of services to meet
              all of your automotive needs.
            </li>
            <li>
              We believe in transparent communication, providing you with clear
              explanations of the work needed, estimated costs, and timelines to
              ensure you're fully informed every step of the way.
            </li>
            <li>
              With our commitment to using quality parts and equipment, you can
              trust that your vehicle is in good hands with us. We stand behind
              our work and aim to exceed your expectations.
            </li>
          </ul>
          <button className={style.aboutBtn}>
            <div className={style.aboutBtnCover}></div>
            <div className={style.aboutBook}>Book An Appointment</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
