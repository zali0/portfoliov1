import React, { Component } from "react";
import Path from "../images/Path.svg";
import "./Contact.css";
export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <img src={Path} alt="" className="path" />
        <div className="form">
          <h3 className="heading">Contact</h3>
          <hr className="underline" />
          <div className="form__area">
            <p>Have a question or want to work together?</p>
            <div className="inputs">
              <input className="input" type="text" placeholder="Name" />
              <input className="input" type="email" placeholder="Email" />
              <textarea
                className="input"
                rows="4"
                cols="50"
                placeholder="Your Message..."
              ></textarea>
              <button className="submit">SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
