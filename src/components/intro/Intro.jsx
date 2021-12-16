import React from "react";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import BuildIcon from "@mui/icons-material/Build";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import "./intro.scss";

export default function Intro({ menuOpen, setMenuOpen }) {
  return (
    <div className={"intro " + (menuOpen && "active")} id="intro">
      <div className="timeline">
        <div className="timeline-item">
          <a href="#portfolio">
            <ArchitectureIcon className="timeline-icon" />
            <h3>Plan</h3>
          </a>
        </div>
        <div className="timeline-item">
          <a href="#services">
            <BuildIcon className="timeline-icon" />
            <h3>Build</h3>
          </a>
        </div>
        <div className="timeline-item">
          <a href="#contact">
            <MonetizationOnIcon className="timeline-icon" />
            <h3>Succeed</h3>
          </a>
        </div>
      </div>
      <p className="intro-text">
        More than 15 <br />
        years of expertise <br />
        with restaurants <br />
        and kitchen management <br />
      </p>
    </div>
  );
}
