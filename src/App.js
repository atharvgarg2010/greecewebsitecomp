import './App.css';
import Navbar from './components/Navbar';
import React from "react";
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
import ScrollReveal from 'scrollreveal'
import 'animate.css';
import Home from './components/Home';
import About from './components/About';
import GreeceAboutBox from './components/GreeceAboutBox';
import Gallery from './components/Gallery';
import Service from './components/Service';
import Contact from './components/Contact';
import PackageBox from './components/PackageBox';
function App() {
  const se = ScrollReveal({
    "origin": "top",
    "distance": "60px",
    "duration": 2500,
    "delay": 400
  })
  useEffect(() => {
    se.reveal(`.p1`, { origin: "bottom" })
    se.reveal(`.sgs`)
    se.reveal(".aboutt", { interval: 7000 })
    se.reveal(".serviceBox", { interval: 100, origin: "bottom" })
    se.reveal(".left", { interval: 200, origin: "left" })
    se.reveal(".right", { interval: 10, origin: "right" })
    se.reveal(".top", { interval: 200, origin: "top" })
    se.reveal(".bottom", { interval: 10, origin: "bottom" })
    se.reveal(".top", { interval: 200, origin: "top" })
    se.reveal(".bottom", { interval: 10, origin: "bottom" })
  })


  return (
    <>
      <Router>

        <Navbar>
        </Navbar>


        <Routes>
          <Route exact path='/' element={<><Home></Home><About></About><GreeceAboutBox /><Gallery></Gallery><Service></Service><Contact></Contact></>}></Route>
          <Route exact path='/about' element={<><Home></Home><About></About><Service></Service></>}></Route>
          <Route exact path='/contact' element={<><Home></Home><Contact></Contact></>}></Route>
          <Route exact path='/gallery' element={<><Home></Home><Gallery></Gallery></>}></Route>
        </Routes>

      </Router>
    </>
  );
}

export default App;
