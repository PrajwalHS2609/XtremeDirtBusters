import React from 'react'
import style from "./acc2.module.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Accessories2Heading from './Accessories2Heading'
import Acc2Interior from './Acc2Interior'
import Acc2Exterior from './Acc2Exterior'
import Acc2Electric from './Acc2Electric'
import Acc2Safety from './Acc2Safety'
const Accessories2 = () => {
  return (
    <div className={style.acc2Container}>
       <BrowserRouter>
      <Accessories2Heading/>
      <Routes>
        <Route path="/" element={<Acc2Interior/>}/>
        <Route path="/exterior" element={<Acc2Exterior/>}/>
        <Route path="/electric" element={<Acc2Electric/>}/>
        <Route path="/safety" element={<Acc2Safety/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Accessories2
