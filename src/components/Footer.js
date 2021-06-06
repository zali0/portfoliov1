import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import React, { Component } from "react";
import { animateScroll as scroll } from "react-scroll";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <FontAwesomeIcon
          icon={faBackward}
          size="2x"
          className="backward"
          onClick={() => scroll.scrollToTop()}
        />
        <div className="button-block">
          <div className="social">
            <a
              href="https://www.instagram.com/zeesh_._/"
              rel="noreferrer"
              target="_blank"
            >
              <InstagramIcon className="fi" />
            </a>
          </div>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/zeeshan-ali-3b5532187/"
              rel="noreferrer"
              target="_blank"
            >
              <LinkedInIcon className="fi" />
            </a>
          </div>
          <div className="social">
            <a href="https://github.com/zali0" rel="noreferrer" target="_blank">
              <GitHubIcon className="fi" />
            </a>
          </div>
          <div className="social">
            <a
              href="https://wa.me/919059350241"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <WhatsAppIcon className="fi" />
            </a>
          </div>
        </div>
        <p className="footnote">
          ZEESHAN ALI <span className="highlight">©2021</span>
        </p>
      </div>
    );
  }
}
