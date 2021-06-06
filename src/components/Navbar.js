import React, { Component } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            {" "}
            <Link
              spy={true}
              activeClass="active"
              to="home"
              smooth={true}
              duration={1000}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              activeClass="active"
              to="about"
              smooth={true}
              duration={1000}
              href="#about"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              activeClass="active"
              to="portfolio"
              smooth={true}
              duration={1000}
            >
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              activeClass="active"
              to="contact"
              smooth={true}
              duration={1000}
              href="#contact"
            >
              CONTACT
            </Link>
          </li>
        </ul>
        <hr className="navLine"/>
      </div>
      
    );
  }
}

export default Navbar;
