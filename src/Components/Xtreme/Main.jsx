import React from "react";
import NavBar from "./NavBar/NavBar";
import "./Global.css"
import Page1 from "./Pages/Page1/Page1";
import Accessories from "./Pages/Accessories/Accessories";
import CarCare from "./Pages/CarCare/CarCare";
import Map from "./Pages/Map/Map";
import LastBlock from "./Pages/LastBlock/LastBlock";
import About from "./Pages/About/About";
import Accessories2 from './Pages/Accessories2/Accessories2';

const Main = () => {
  return (
    <div>
      <NavBar/>
      <Page1/>
      <CarCare/>
      <Accessories/>
      <Accessories2/>
      <About/>
      <Map/>
      <LastBlock/>
    </div>
  );
};
export default Main;
