import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

import "../assets/materialize/styles/materialize.min.css";
import "../assets/materialize/styles/styles.css";

import * as _global from "../global";

// As materialize JS file uses the window global object, we need to import it only if it is defined.
// See: https://www.gatsbyjs.com/docs/debugging-html-builds/#how-to-check-if-window-is-defined
if (typeof window !== "undefined") {
  window.M = require("../assets/materialize/js/materialize.min.js");
}

interface NavbarLinksProps {
  color?: "white-text";
}

function NavbarLinks({ color }: NavbarLinksProps): JSX.Element {
  return (
    <>
      <li><Link className={color} to="/services">Services</Link></li>
      <li><Link className={color} to="/about">About Us</Link></li>
      <li><Link className={color} to="/contact">Contact</Link></li>
    </>
  );
}

interface Props {
  children: JSX.Element;
}

export default function Layout({ children }: Props): JSX.Element {
  React.useEffect(function initSideNavs() {
    const sideNavs = document.querySelectorAll('.sidenav');
    window.M.Sidenav.init(sideNavs);
  }, []);

  return (
    <>
      {/* Import icons */}
      <Helmet>
        {/* TODO: Save the fonts in the project */}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Helmet>

      <nav className="white" role="navigation">
        <div className="nav-wrapper container">
          <Link id="logo-container" to="/" className="brand-logo">CodingPalta</Link>

          <ul className="right hide-on-med-and-down">
            <NavbarLinks />
          </ul>

          <ul id="nav-mobile" className="sidenav">
            <NavbarLinks />
          </ul>
          <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>

        </div>
      </nav>

      {children}

      <footer className="page-footer teal">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Coding Palta LLC</h5>
              <p className="grey-text text-lighten-4">
                {/* TODO: Short description about the LLC -> We provide professional software development services for startups */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel accumsan nulla. Maecenas eget purus est. Donec nisi ipsum, bibendum et rutrum at, iaculis in orci. Praesent facilisis mattis ligula, et consequat neque mollis eu. Donec ut luctus velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="col l3 s12">
              <h5 className="white-text">Sections</h5>
              <ul>
                <NavbarLinks color="white-text" />
              </ul>
            </div>
          </div>
          {/* TODO: Add additional section here */}
        </div>
        <div className="footer-copyright">
          <div className="container">
            &nbsp;&nbsp;© Copyright 2022 - Coding Palta LLC - All rights reserved
          </div>
        </div>
      </footer>
    </>
  );
}

