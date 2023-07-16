import React from "react";
import "./Services.css";
import Heart from "../../assets/img/heartemoji.png";
import Glases from "../../assets/img/glasses.png";
import Humble from "../../assets/img/humble.png";
import Card from "../Card/Card";

function Services() {
  return (
    <div className="services">
      {/* left */}
      <div className="s-left">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet.{" "}
          <br /> adipisicing elit. Eius, iste!
        </span>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="s-right">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={Heart}
            heading={"Design"}
            detail={"Figma, Skecth, Photoshop, Adobe, Adobe xd"}
          />
        </div>
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glases}
            heading={"Developer"}
            detail={"Html, CSS, Javascript, Python, React"}
          />
        </div>
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"Tester"}
            detail={"LoadRunner, UFT, JMeter, Selenium"}
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Services;
