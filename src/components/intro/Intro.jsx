import React from "react";
import "./intro.scss";

export default function Intro({ menuOpen, setMenuOpen }) {
  return (
    <div className={"intro " + (menuOpen && "active")} id="intro">
      <p>This is intro area</p>
    </div>
  );
}
