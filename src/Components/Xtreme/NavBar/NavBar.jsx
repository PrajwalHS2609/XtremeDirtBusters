import React, { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import MenuResponsive from "./MenuResponse";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Navbar.css";
import Page1 from "../Pages/Page1/Page1";
import CarCare from "../Pages/CarCare/CarCare";
import Accessories from "../Pages/Accessories/Accessories";
import About from "../Pages/About/About";
import LastBlock from "../Pages/LastBlock/LastBlock";
import Map from "../Pages/Map/Map";
const NavBar = () => {
  let [scroll, setScroll] = useState(false);

  let changeColor = () => {
    if (window.scrollY >= 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <>
      <div id="navbarContainerResp">
        <BrowserRouter>
          <MenuResponsive />
          <Routes>
            <Route path="/#page1" element={<Page1 />} />
            <Route path="/#carcare" element={<CarCare />} />
            <Route path="/#accessories" element={<Accessories />} />
            <Route path="/#about" element={<About />} />
            <Route path="/#location" element={<Map />} />
            <Route path="/#contact" element={<LastBlock />} />
          </Routes>
        </BrowserRouter>
        <Logo />
      </div>
      <div className={scroll ? "navbarContainer" : "navbarContainer1"}>
        {/* <MenuResponsive /> */}
        <Logo />
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/#page1" element={<Page1 />} />
            <Route path="/#carcare" element={<CarCare />} />
            <Route path="/#accessories" element={<Accessories />} />
            <Route path="/#about" element={<About />} />
            <Route path="/#location" element={<Map />} />
            <Route path="/#contact" element={<LastBlock />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};
export default NavBar;
