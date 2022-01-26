import React from "react";
import { Link } from "gatsby";

import "../assets/materialize/styles/materialize.min.css";
import "../assets/materialize/styles/styles.css";

function NavbarLinks(): JSX.Element {
  return (
    <>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </>
  );
}

interface Props {
  children: JSX.Element;
}

export default function Layout({ children }: Props): JSX.Element {
  return (
    <>
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
      {/** Footer */}
    </>
  );
}

