import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import Unity from './pages/Unity'
import Figma from './pages/Figma'
import WebSite from './pages/Website'
import Trading from './pages/Trading'

import Contact from './pages/Contact'

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/PreLoader"
import ScrollToTop from "./components/ScrollToTop"

import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Unity />} />
          <Route path="/figma" element={<Figma />} />
          <Route path="/webSite" element={<WebSite />} />
          <Route path="/trading" element={<Trading />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
