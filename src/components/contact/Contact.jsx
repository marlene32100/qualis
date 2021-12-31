import React from "react";
import MediaQuery from "react-responsive";
import PhoneIcon from "@mui/icons-material/Phone";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h2 className="contact-title">Contacts</h2>
      <MediaQuery minWidth={768}>
        <div className="worldwide">
          <a
            href="https://calendly.com/qualisitalica/first-consultation-free"
            className="book-button"
          >
            Book a Free Consultation
            <HeadsetMicIcon className="book-icon" />
          </a>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={767.98}>
        <div className="worldwide">
          <a
            href="https://calendly.com/qualisitalica/first-consultation-free"
            className="book-button"
          >
            Free Consultation
            <HeadsetMicIcon className="book-icon" />
          </a>
        </div>
      </MediaQuery>

      <div className="container">
        <address>
          Dammgatan 30A, <br />
          74147 Knivsta, <br />
          Sweden <br />
        </address>
        <hr className="center-diamond" />
        <div className="phone-area">
          <p>
            Phone: <br />
          </p>
          <a href="tel:+46764019750" className="phonenumber">
            <PhoneIcon className="phone-contact-icon" />
            +46 764 019 750
          </a>
          <p>Mail:</p>
          <a href="mailto:qualisitalica@gmail.com" className="email">
            <MailOutlineIcon className="email-icon" />
            qualisitalica@gmail.com
          </a>
        </div>
        <hr className="center-diamond" />
        <div className="organization">
          <p className="organization-text">Org.Nr. SE830201169001</p>
        </div>
      </div>
      <div className="copyright">
        <p className="copyright-text">
          Website made by <a href="http://blueblissstudio.com">Blue Bliss</a>
        </p>
      </div>
    </div>
  );
}
