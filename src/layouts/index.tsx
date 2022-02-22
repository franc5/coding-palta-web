import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

import NavbarLinks from "./NavbarLinks";
import { ReactComponent as LinkedIn_Logo } from "../images/linkedin.svg";
import { ReactComponent as Instagram_Logo } from "../images/instagram.svg";
import { ReactComponent as Twitter_Logo } from "../images/twitter.svg";

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

const LOGO_SIZE = 25;

const LOCALE = {
  [LANGS.EN]: {
    payment: {
      text: "We work with secure payment methods and SSL encryption",
    },
    terms: {
      text: "Terms and conditions",
      url: "/terms",
    },
    privacy: {
      text: "Privacy",
      url: "/privacy",
    },
    slogan: {
      text: "Professional software development for startups",
    },
    rights: {
      text: "All rights reserved",
    },
  },
  [LANGS.ES]: {
    payment: {
      text: "Trabajamos con sistemas de pago seguros y encriptación SSL",
    },
    terms: {
      text: "Términos y condiciones",
      url: "/es/terminos",
    },
    privacy: {
      text: "Privacidad",
      url: "/es/privacidad",
    },
    slogan: {
      text: "Desarrollo de software profesional para startups",
    },
    rights: {
      text: "Todos los derechos reservados",
    },
  },
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
        <title>CodingPalta</title>
        {/* TODO: Save the fonts in the project */}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Helmet>

      <nav className="white" role="navigation">
        <div className="nav-wrapper container">
          <Link id="logo-container" to={homeUrl} className="brand-logo">Coding</Link>

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
                {LOCALE[lang].slogan.text}
                <br />
                530-B Harkle Road STE 100
                <br />
                Santa Fe, NM 87505
              </p>
              <p>
                <a href="https://www.linkedin.com/company/coding-palta-llc/" target="_blank" title="See us at LinkedIn">
                  <LinkedIn_Logo width={LOGO_SIZE} height={LOGO_SIZE} />
                </a>
                &nbsp;
                &nbsp;
                <a href="https://www.instagram.com/codingpalta/" target="_blank" title="See us at Instagram">
                  <Instagram_Logo width={LOGO_SIZE} height={LOGO_SIZE} />
                </a>
                &nbsp;
                &nbsp;
                <a href="https://twitter.com/CodingPalta" target="_blank" title="See us at Twitter">
                  <Twitter_Logo width={LOGO_SIZE} height={LOGO_SIZE} />
                </a>
              </p>
            </div>
            <div className="col l3 offset-l3 s12">
              <p>
                {LOCALE[lang].payment.text}
                <img src={Payment_Methods} className="responsive-img" />
                <Link to={LOCALE[lang].terms.url} className="white-text">{LOCALE[lang].terms.text}</Link> | <Link to={LOCALE[lang].privacy.url} className="white-text">{LOCALE[lang].privacy.text}</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            &nbsp;&nbsp;&copy; Copyright 2022 - CodingPalta LLC - {LOCALE[lang].rights.text}
          </div>
        </div>
      </footer>
    </>
  );
}

