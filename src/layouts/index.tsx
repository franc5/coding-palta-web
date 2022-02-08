import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

import NavbarLinks from "./NavbarLinks";

import { getLangFromPathname, LANGS } from "../utils/lang";

import "../assets/materialize/styles/materialize.min.css";
import "../assets/materialize/styles/styles.css";

import * as _global from "../global";

// @ts-ignore
import Payment_Methods from "./img/Payment_Methods.png";

// As materialize JS file uses the window global object, we need to import it only if it is defined.
// See: https://www.gatsbyjs.com/docs/debugging-html-builds/#how-to-check-if-window-is-defined
if (typeof window !== "undefined") {
  window.M = require("../assets/materialize/js/materialize.min.js");
}

interface Props {
  children: JSX.Element;
  location: {
    pathname: string;
  }
}

export default function Layout({ children, location }: Props): JSX.Element {
  React.useEffect(function initSideNavs() {
    const sideNavs = document.querySelectorAll('.sidenav');
    window.M.Sidenav.init(sideNavs);
  }, []);

  const lang = getLangFromPathname(location.pathname);
  const homeUrl = (lang == LANGS.EN) ? "/" : `/${lang}`;

  return (
    <>
      {/* Import icons */}
      <Helmet>
        {/* TODO: Save the fonts in the project */}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Helmet>

      <nav className="white" role="navigation">
        <div className="nav-wrapper container">
          <Link id="logo-container" to={homeUrl} className="brand-logo">CodingPalta</Link>

          <ul className="right hide-on-med-and-down">
            <NavbarLinks lang={lang} />
          </ul>

          <ul id="nav-mobile" className="sidenav">
            <NavbarLinks lang={lang} />
          </ul>
          <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>

        </div>
      </nav>

      {children}

      <footer className="page-footer teal">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">CodingPalta LLC</h5>
              <p className="grey-text text-lighten-4">
                {/* TODO: Short description about the LLC -> We provide professional software development services for startups */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel accumsan nulla. Maecenas eget purus est. Donec nisi ipsum, bibendum et rutrum at, iaculis in orci. Praesent facilisis mattis ligula, et consequat neque mollis eu. Donec ut luctus velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="col l3 offset-l3 s12">
              <p>
                We work with secure payment methods and SSL encryption
                <img src={Payment_Methods} className="responsive-img" />
              </p>
            </div>
          </div>
          {/* TODO: Add additional section here */}
        </div>
        <div className="footer-copyright">
          <div className="container">
            &nbsp;&nbsp;&copy; Copyright 2022 - CodingPalta LLC - {(lang == LANGS.EN) ? "All rights reserved" : "Todos los derechos reservados"}
          </div>
        </div>
      </footer>
    </>
  );
}

