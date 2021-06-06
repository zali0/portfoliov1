import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Facebook, GitHub, LinkedIn } from "@material-ui/icons";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import React, { Component } from "react";
import "./Footer.css";
import { Icon } from "@material-ui/core";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div class="button-block">
          <div class="social">
            <a href="#">
              <InstagramIcon className="fi" />
            </a>
          </div>
          <div class="social">
            <a href="#">
              <LinkedInIcon className="fi" />
            </a>
          </div>
          <div class="social">
            <a href="#">
              <GitHubIcon className="fi" />
            </a>
          </div>
          {/* <div class="social">
            <a href="#">a</a>
          </div> */}
        </div>
        <p className="footnote">ZEESHAN ALI <span className="highlight">©2021</span></p>
      </div>
    );
  }
}
