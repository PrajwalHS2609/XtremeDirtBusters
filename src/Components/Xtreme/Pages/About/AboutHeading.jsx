import React from 'react'
import style from "./about.module.css"
const AboutHeading = () => {
  return (
    <div className={style.aboutHeadingContainer}>
      <div className={style.aboutHeadingDot}>
      <div className={style.aboutHeadingInnerDot}></div>
      </div>
      <div className={style.aboutHeadingTxt}>WHY US <span>?</span></div>
    </div>
  )
}

export default AboutHeading
