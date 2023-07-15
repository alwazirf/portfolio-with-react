import React from "react";
import "./Intro.css";
import Github from "../../assets/img/github.png";
import Linkedin from "../../assets/img/linkedin.png";
import Instagram from "../../assets/img/instagram.png";
import Vector1 from "../../assets/img/Vector1.png";
import Vector2 from "../../assets/img/Vector2.png";
import Boy from "../../assets/img/boy.png";
import Thumbup from "../../assets/img/thumbup.png";
import Crown from "../../assets/img/crown.png";
import Glassimoji from "../../assets/img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy I'am</span>
          <span>Alwazir Fitrah</span>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
            debitis fugit reprehenderit odio aut quia doloremque in tempore fuga
            maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aspernatur, numquam?
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <img src={Github} alt="my-github" />
          <img src={Linkedin} alt="my-linkedin" />
          <img src={Instagram} alt="my-instagram" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <img src={Glassimoji} alt="" />
        <div className="i-floatDev">
          <FloatingDiv image={Crown} text1="Dev" text2="Developer" />
        </div>
        <div className="i-floatDev2">
          <FloatingDiv image={Thumbup} text1="Best Design" text2="Award" />
        </div>
        <div
          className="i-blur"
          style={{ background: "rgb(238, 210, 255)" }}
        ></div>
        <div
          className="i-blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            left: "-9rem",
            width: "21rem",
            height: "11rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
