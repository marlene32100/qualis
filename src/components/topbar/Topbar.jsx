import React from "react";
import "./topbar.scss";
import logo from "../../media/qualis_logo.jpg";
import DehazeIcon from "@mui/icons-material/Dehaze";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#contact">
            <div className="logo">
              <img src={logo} alt="Qualis Italica logo" className="logo-img" />
            </div>
          </a>
        </div>
        <div className="center">
          <h1>Qualis Italica</h1>
          <h2 className="description">Kitchen Project Management</h2>
        </div>
        <div className="right">
          <DehazeIcon className="menu" onClick={() => setMenuOpen(!menuOpen)} />
        </div>
      </div>
    </div>
  );
}
