import React from "react";
import ReactDOM from "react-dom";

import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Showcase from "./components/showcase/Showcase";
import Phone from "./components/phone/Phone";

import "./App.css";
import "./app.scss";

import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <header>
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </header>

      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="sections">
        <Intro menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Showcase menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Portfolio menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Services menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Contact />
      </div>

      <Phone />
    </div>
  );
}

export default App;
