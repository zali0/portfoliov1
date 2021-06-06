import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faDesktop,
  faLightbulb,
  faRocket,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./About.css";
export default class About extends Component {
  render() {
    return (
      <div className="about" id="about">
        <h3 className="heading">ABOUT</h3>
        <hr className="underline" />
        <div className="skills">
          <div className="skill">
            <div className="icon">
              <FontAwesomeIcon
                icon={faTachometerAlt}
                size="2x"
                className="fa"
              />
            </div>
            <p className="title">Fast</p>
            <p className="details">
              Fast load times and lag free interaction, my highest priority.
            </p>
          </div>
          <div className="skill">
            <div className="icon">
              <FontAwesomeIcon icon={faDesktop} size="2x" className="fa" />
            </div>
            <p className="title">Responsive</p>
            <p className="details">
              My layouts will work on any device, big or small.
            </p>
          </div>
          <div className="skill">
            <div className="icon">
              <FontAwesomeIcon icon={faLightbulb} size="2x" className="fa" />
            </div>
            <p className="title">Intuitive</p>
            <p className="details">
              Strong preference for easy to use, intuitive UX/UI.
            </p>
          </div>
          <div className="skill">
            <div className="icon">
              <FontAwesomeIcon icon={faRocket} size="2x" className="fa" />
            </div>
            <p className="title">Dynamic</p>
            <p className="details">
              Websites don't have to be static, I love making pages come to
              life.
            </p>
          </div>
        </div>
        <div className="info">
          <div className="info1">
            <p className="info1__question">Who am I?</p>
            <p className="info1__answer">
              I'm a Full-Stack Web Developer in <span style={{color: "#04c2c9"}}>Hyderabad, India</span>. I have serious
              passion for UI effects, animations and creating intuitive, dynamic
              user experiences.
            </p>
            <p className="info1__contact">Let's make something special.</p>
          </div>
          <div className="info2">
          <p className="info2__title">Skills</p>
            <div>HTML</div>
            <div>CSS</div>
            <div>Javascript</div>
            <div>React.js</div>
            <div>Node.js</div>
            <div>Express.js</div>
            <div>PostgreSQL</div>
            <div>Redux</div>
            <div>Invision Studio</div>
          </div>
        </div>
      </div>
    );
  }
}
