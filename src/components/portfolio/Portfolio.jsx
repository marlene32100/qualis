import React from "react";
import MediaQuery from "react-responsive";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import kitchen from "../../media/kitchen.jpg";
import "./portfolio.scss";

export default function Portfolio({ menuOpen, setMenuOpen }) {
  return (
    <div className={"portfolio " + (menuOpen && "active")} id="portfolio">
      <h2 className="section-title">Build a successful restaurant</h2>
      <MediaQuery minWidth={992}>
        <div className="container">
          <div className="left">
            <img
              src={kitchen}
              alt="Image of chefs in a kitchen restaurant while working"
              className="kitchen-image"
            />
          </div>
          <div className="right">
            <p className="intro-description">
              Stop wasting time and money.
              <br /> To build a successful restaurant you need to focus first of
              all on the structure.
              <br />
              <strong>Optimize</strong> the space to make work operations{" "}
              <strong>easier, faster, have perfect control</strong> over safety
              systems.
              <br />
              <strong>The less you waste, the more you earn.</strong>
              <br />
            </p>
            <p className="intro-list">
              A better planned working space will provide you:
            </p>
            <ul>
              <li>
                <BookmarkAddedIcon className="bookmark" />
                Higher quality
              </li>
              <li>
                <BookmarkAddedIcon className="bookmark" />
                More satisfied customers
              </li>
              <li>
                <BookmarkAddedIcon className="bookmark" />
                More revenue
              </li>
            </ul>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={991.98}>
        <div className="container-small">
          <div className="top">
            <img
              src={kitchen}
              alt="Image of chefs in a kitchen restaurant while working"
              className="kitchen-image-small"
            />
          </div>
          <div className="bottom">
            <p className="intro-description">
              <strong>Optimize</strong> the space to make work operations{" "}
              <strong>easier, faster, have perfect control</strong> over safety
              systems.
            </p>
            <p className="intro-list">
              A better planned working space will provide you:
            </p>
            <ul>
              <li>
                <BookmarkAddedIcon className="bookmark" />
                Higher quality
              </li>
              <li>
                <BookmarkAddedIcon className="bookmark" />
                More satisfied customers
              </li>
              <li>
                <BookmarkAddedIcon className="bookmark" />
                More revenue
              </li>
            </ul>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
}
