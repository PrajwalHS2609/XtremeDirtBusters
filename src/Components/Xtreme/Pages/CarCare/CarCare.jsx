import React from 'react'
import style from "./carCare.module.css"
import CarCareHeading from './CarCareHeading'
import CarCareCards from './CarCareCards'
const CarCare = () => {
  return (
    <div className={style.carCareContainer} id='carcare' >
      <CarCareHeading/>
      <CarCareCards/>
    </div>
  )
}

export default CarCare
