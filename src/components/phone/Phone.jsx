import React from "react";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import "./phone.scss";

export default function Phone() {
  return (
    <div className="phone-container">
      <a href="tel:+46764019750">
        <PhoneIphoneIcon className="phone-icon" />
      </a>
    </div>
  );
}
