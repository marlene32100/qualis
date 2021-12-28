import React, { useState } from "react";
import MediaQuery from "react-responsive";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import EngineeringIcon from "@mui/icons-material/Engineering";
import SchoolIcon from "@mui/icons-material/School";
import service from "../../media/service.jpeg";
import plan from "../../media/plan.jpeg";
import build from "../../media/build.jpeg";
import coach from "../../media/coach.jpeg";

import "./showcase.scss";

export default function Showcase({ menuOpen, setMenuOpen }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: <ArchitectureIcon className="left-icon" />,
      title: "Kitchen Planning",
      desc: "Planning perfectly a kitchen space is the first step for success. Let Qualis Italica handle all the process",
      img: plan,
    },
    {
      id: "2",
      icon: <EngineeringIcon className="left-icon" />,
      title: "Building Supervisor",
      desc: "Make sure that also the building process is supervised by a specialist. Qualis Italica works closely with building companies and makes sure that everything is right.",
      img: build,
    },
    {
      id: "3",
      icon: <RestaurantIcon className="left-icon" />,
      title: "Service Supervisor",
      desc: "Book a service supervisor consulting to learn how to optimize the work in the kitchen ",
      img: service,
    },
    {
      id: "4",
      icon: <SchoolIcon className="left-icon" />,
      title: "Kitchen Coaching",
      desc: "Boost your kitchen performances by booking a top class coaching service for your head chef and kitchen staff",
      img: coach,
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className={"showcase " + (menuOpen && "active")} id="showcase">
      <h2 className="section-title">Showcase</h2>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <MediaQuery minWidth={992}>
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">{d.icon}</div>
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    <span>Projects</span>
                  </div>
                </div>
                <div className="right">
                  <img
                    src={d.img}
                    alt="Chefs working in a kitchen"
                    className="right-image"
                  />
                </div>
              </div>
              <ArrowLeftIcon
                className="left-arrow"
                onClick={() => handleClick("left")}
              />
              <ArrowRightIcon
                className="right-arrow"
                onClick={() => handleClick("right")}
              />
            </MediaQuery>
            <MediaQuery maxWidth={991.98}>
              <div className="small-item">
                <div className="top">
                  <img
                    src={d.img}
                    alt="Chefs working in a kitchen"
                    className="top-image"
                  />
                </div>
                <div className="bottom">
                  <div className="bottomContainer">
                    <div className="imgContainer">{d.icon}</div>
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    <span>Projects</span>
                  </div>
                </div>
              </div>
              <ArrowLeftIcon
                className="small-left-arrow"
                onClick={() => handleClick("left")}
              />
              <ArrowRightIcon
                className="small-right-arrow"
                onClick={() => handleClick("right")}
              />
            </MediaQuery>
          </div>
        ))}
      </div>
    </div>
  );
}
