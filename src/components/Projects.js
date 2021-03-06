import {
  faArrowCircleLeft,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import inventoryzee__login from "../images/inventoryzee__login.bmp";
import inventoryzee__register from "../images/inventoryzee__register.bmp";
import inventoryzee__home from "../images/inventoryzee__home.bmp";
import inventoryzee__categories from "../images/inventoryzee__categories.bmp";
import inventoryzee__products from "../images/inventoryzee__products.bmp";
import inventoryzee__product from "../images/inventoryzee__product.bmp";
import inventoryzee__logo from "../images/inventoryzee__logo.png";
import alhaqq__home from "../images/alhaqq__home.bmp";
import alhaqq__support from "../images/alhaqq__support.bmp";

import "./Projects.css";
export default class Projects extends Component {
  render() {
    var inventoryzee = [
      {
        name: "Register",
        image: inventoryzee__register,
        description: "",
      },
      {
        name: "Login",
        image: inventoryzee__login,
        description: "",
      },
      {
        name: "Home",
        image: inventoryzee__home,
        description: "",
      },
      {
        name: "Categories",
        image: inventoryzee__categories,
        description: "",
      },
      {
        name: "Products",
        image: inventoryzee__products,
        description: "inventory...",
      },
      {
        name: "Inventory Record",
        image: inventoryzee__product,
        description:
          "The whole record for the number of stock produced and sold",
      },
    ];
    var alhaqq = [
      {
        name: "Home",
        image: alhaqq__home,
        description: "",
      },
      {
        name: "Support Us Page",
        image: alhaqq__support,
        description: "",
      },
    ];
    return (
      <div className="projects" id="portfolio">
        <h3 className="heading">PROJECTS</h3>
        <hr className="underline" />
        <Router>
          <Switch>
            <Route path="/inventoryzee">
              {
                <div className="project">
                  <Link to="/" className="back">
                    <FontAwesomeIcon icon={faArrowCircleLeft} size="3x" />
                  </Link>
                  <h3 className="project__name">inventoryZee</h3>
                  <img
                    className="project__logo"
                    src={inventoryzee__logo}
                    alt=""
                  />
                  <Carousel className="project__images">
                    {inventoryzee.map((item, i) => (
                      <Item key={i} item={item} />
                    ))}
                  </Carousel>
                  <div className="project__info">
                    <p className="project__title">Buisness Analytics</p>
                    <p>
                      inventoryZee provides analytics, tracking, and business
                      intelligence for companies to use on the go. A single page
                      React application implemented with Redux, hosted on
                      Heroku. Server written in Node.js and Express.j. Databse
                      in PostgreSQL.
                    </p>
                  </div>

                  <div className="visitSite">
                    <a
                      href="https://inventoryzee.herokuapp.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      {" "}
                      <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        size="1x"
                      />{" "}
                      View site
                    </a>
                  </div>
                  <p className="project__title">Technologies used: </p>
                  <div className="techs">
                    <div>React.js</div>
                    <div>Redux</div>
                    <div>Node.js</div>
                    <div>Express.js</div>
                    <div>PostgreSQL</div>
                    <div>Knex.js</div>
                    <div>Heroku</div>
                  </div>
                </div>
              }
            </Route>
            <Route path="/al-haqq">
              {
                <div className="project">
                  <Link to="/" className="back">
                    <FontAwesomeIcon icon={faArrowCircleLeft} size="3x" />
                  </Link>
                  <h3 className="project__name">Al Haqq Islamic Foundation</h3>
                  {/* <img className="project__logo" src={alhaqq__home} alt="" /> */}
                  <Carousel className="project__images">
                    {alhaqq.map((item, i) => (
                      <Item key={i} item={item} />
                    ))}
                  </Carousel>
                  <div className="project__info">
                    <p className="project__title">Al Haqq Islamic Foundation</p>
                    <p>
                      Al Haqq Islamic Foundation is a Muslim Charity engaged in
                      various social and community development programs.
                    </p>
                  </div>

                  <div className="visitSite">
                    <a
                      href="https://al-haqq.herokuapp.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} size="1x" />
                      View site
                    </a>
                  </div>
                  <p className="project__title">Technologies used: </p>
                  <div className="techs">
                    <div>React.js</div>
                    <div>React Router</div>
                    <div>Heroku</div>
                  </div>
                </div>
              }
            </Route>
            <Route path="/">
              {
                <div className="items">
                  <div className="item">
                    <p className="item__name">inventoryZee</p>
                    <img
                      className="item__image"
                      src={inventoryzee__login}
                      alt=""
                    />
                    <Link to="/inventoryzee" className="item__icon">
                      <FontAwesomeIcon icon={faExternalLinkAlt} size="1x" />
                    </Link>
                  </div>
                  <div className="item">
                    <p className="item__name">Al Haqq Islamic Foundation</p>
                    <img className="item__image" src={alhaqq__home} alt="" />
                    <Link to="/al-haqq" className="item__icon">
                      <FontAwesomeIcon icon={faExternalLinkAlt} size="1x" />
                    </Link>
                  </div>
                </div>
              }
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

function Item(props) {
  return (
    <Paper>
      <img src={props.item.image} alt={""} />
      <div style={{ padding: "20px" }}>
        <p style={{ fontWeight: "700" }}>{props.item.name}</p>
        <p>{props.item.description}</p>
      </div>
    </Paper>
  );
}
