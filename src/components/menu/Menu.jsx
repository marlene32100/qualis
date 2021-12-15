import React from "react";
import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu-open " + (menuOpen && "active")}>
      <ul className="list-menu-open">
        <li className="item-list-menu-open">
          <a href="#intro">About</a>
        </li>
        <li className="item-list-menu-open">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="item-list-menu-open">
          <a href="#services">Services</a>
        </li>
        <li className="item-list-menu-open">
          <a href="#testimonials">Testimonials</a>
        </li>
        <li className="item-list-menu-open">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
