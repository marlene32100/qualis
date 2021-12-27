import React from "react";
import MediaQuery from "react-responsive";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h2 className="contact-title">Contacts</h2>
      <MediaQuery minWidth={1224}>
        <div className="worldwide">
          <p>Services are available worldwide </p>
          <LanguageIcon className="world-icon" />
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={1224}>
        <div className="worldwide-small">
          <p>Services are available worldwide </p>
          <LanguageIcon className="world-icon" />
        </div>
      </MediaQuery>

      <div className="container">
        <address>
          Dammgatan 30A, <br />
          74147 Knivsta, <br />
          Sweden <br />
        </address>
        <div className="phone-area">
          <p>
            Call for info / consulting: <br />
          </p>
          <a href="tel:+46764019750" className="phonenumber">
            <PhoneIcon className="phone-contact-icon" />
            +46 764 019 750
          </a>
        </div>

        <div className="organization">
          <p className="organization-text">Org.Nr. SE830201169001</p>
        </div>
      </div>
    </div>
  );
}
