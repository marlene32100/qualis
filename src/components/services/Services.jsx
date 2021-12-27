import React from "react";
import MediaQuery from "react-responsive";
import "./services.scss";

export default function Services({ menuOpen, setMenuOpen }) {
  return (
    <div className={"services " + (menuOpen && "active")} id="services">
      <h2 className="section-title">Services</h2>
      <MediaQuery minWidth={1224}>
        <div className="container">
          <div className="service">
            <h3 className="service-name">Repurposing kitchen space</h3>
          </div>
          <div className="service">
            <h3 className="service-name">
              Plan kitchen area from the ground up
            </h3>
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
      </MediaQuery>
      <MediaQuery maxWidth={1224}>
        <h3 className="book-service-text">
          Book a top class service to help your restaurant beat your competitors
        </h3>
        <div className="container-small">
          <div className="service-small">
            <h3 className="service-small-name">Repurposing kitchen space</h3>
          </div>
          <div className="service-small">
            <h3 className="service-small-name">
              Plan kitchen area from the ground up
            </h3>
          </div>
          <div className="service-small">
            <h3 className="service-small-name">
              Consulting on safety standards
            </h3>
          </div>
          <div className="service-small">
            <h3 className="service-small-name">
              Consulting on accessibility standards
            </h3>
          </div>
          <div className="service-small">
            <h3 className="service-small-name">
              Consulting on hygiene regulations
            </h3>
          </div>
          <div className="service-small">
            <h3 className="service-small-name">
              Supervising restaurant management
            </h3>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
}
