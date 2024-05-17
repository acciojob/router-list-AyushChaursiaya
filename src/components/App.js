
import React from "react";
import './../styles/App.css'
import About from "./About";
import Item1 from "./item1";
import Item2 from './item2';
import Item3 from './item3';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="item1" element={<Item1 />} />
          <Route path="item2" element={<Item2 />} />
          <Route path="item3" element={<Item3 />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
