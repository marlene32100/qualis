import React from "react";
import MediaQuery from "react-responsive";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import BuildIcon from "@mui/icons-material/Build";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import "./intro.scss";

export default function Intro({ menuOpen, setMenuOpen }) {
  return (
    <div className={"intro " + (menuOpen && "active")} id="intro">
      <MediaQuery minWidth={992}>
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
      </MediaQuery>

      <MediaQuery maxWidth={991.98}>
        <div className="timeline-smaller">
          <div className="timeline-item-smaller">
            <a href="#portfolio">
              <ArchitectureIcon className="timeline-icon" />
              <h3>Plan</h3>
            </a>
          </div>
          <div className="timeline-item-smaller">
            <a href="#services">
              <BuildIcon className="timeline-icon" />
              <h3>Build</h3>
            </a>
          </div>
          <div className="timeline-item-smaller">
            <a href="#contact">
              <MonetizationOnIcon className="timeline-icon" />
              <h3>Succeed</h3>
            </a>
          </div>
        </div>
        <div className="cta-smaller">
          <WorkspacePremiumIcon className="premium-icon" />
          <p className="cta-smaller-text">
            Let Qualis Italica plan for you a fully functional kitchen space in
            your restaurant.
            <br />
            <br />
            Destined to win!
          </p>
        </div>
        <p className="intro-text-smaller">
          More than 15 <br />
          years of expertise <br />
          with restaurants <br />
          and kitchen management <br />
        </p>
      </MediaQuery>
    </div>
  );
}
