import React from "react";
import "./topbar.scss";
import MediaQuery from "react-responsive";
import logo from "../../media/qualis_logo.jpg";
import DehazeIcon from "@mui/icons-material/Dehaze";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <MediaQuery minWidth={1224}>
          <div className="left">
            <a href="#contact">
              <div className="logo">
                <img
                  src={logo}
                  alt="Qualis Italica logo"
                  className="logo-img"
                />
              </div>
            </a>
          </div>
          <div className="center">
            <h1>Qualis Italica</h1>
            <h2 className="description">Restaurant Project Management</h2>
          </div>
          <div className="right">
            <DehazeIcon
              className="menu"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={1224}>
          <div className="left">
            <a href="#contact">
              <div className="logo">
                <img
                  src={logo}
                  alt="Qualis Italica logo"
                  className="logo-img"
                />
              </div>
            </a>
          </div>
          <div className="right">
            <DehazeIcon
              className="menu"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </MediaQuery>
      </div>
    </div>
  );
}
