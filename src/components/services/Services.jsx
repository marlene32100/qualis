import React from "react";
import "./services.scss";

export default function Services({ menuOpen, setMenuOpen }) {
  return (
    <div className={"services " + (menuOpen && "active")} id="services">
      <h2 className="section-title">Services</h2>
      <div className="container">
        <div className="service">
          <h3 className="service-name">Repurposing kitchen space</h3>
        </div>
        <div className="service">
          <h3 className="service-name">Plan kitchen area from the ground up</h3>
        </div>
        <div className="service">
          <h3 className="service-name">Consulting on safety standards</h3>
        </div>
        <div className="service">
          <h3 className="service-name">
            Consulting on accessibility standards
          </h3>
        </div>
        <div className="service">
          <h3 className="service-name">Consulting on hygiene regulations</h3>
        </div>
        <div className="service">
          <h3 className="service-name">Supervising restaurant management</h3>
        </div>
      </div>
    </div>
  );
}
