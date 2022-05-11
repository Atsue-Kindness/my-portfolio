import React from "react";
import myimage from "../images/Group 13.png";

const Header = () => {
  return (
    <div className="container">
      <div className="nav">
        <p>My Portfolio</p>
      </div>
      <div className="header">
        <div className="header__texts">
          <h1>
            <span>Hello! i'm</span>
            <br /> Kindness Atsue
          </h1>

          <p>
            I am a graphic designer, A Brand identity designer <br /> and a
            Frontend Web Developer
          </p>

          <a href="#projects" className="header__texts__btn">
            View latest projects
          </a>
        </div>

        <div className="header__image">
          <div className="header__image__box">
            <img src={myimage} alt="" className="header__image__box__img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
