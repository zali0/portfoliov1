import React, { Component } from "react";
import Path from "../images/Path.svg";
import "./Contact.css";
export default class Contact extends Component {
  render() {
    return (
      <div className="contact" id="contact">
        <img src={Path} alt="" className="path" />
        <div className="form">
          <h3 className="heading">Contact</h3>
          <hr className="underline" />
          <div className="form__area">
            <p>Have a question or want to work together?</p>
            <p className="contact__info">
              <a href="mailto:zali2592@gmail.com">
                Email: <span className="highlight">zali2592@gmail.com</span>
              </a>
            </p>
            <p className="contact__info">
              <a href="tel:919059350241">
                {" "}
                Phone No: <span className="highlight">+91 905 935 0241</span>
              </a>
            </p>
            <br />
            <br />
            {/* <div className="inputs">
              <input className="input" type="text" placeholder="Name" />
              <input className="input" type="email" placeholder="Email" />
              <textarea
                className="input"
                rows="4"
                cols="50"
                placeholder="Your Message..."
              ></textarea>
              <button className="submit">SUBMIT</button>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
