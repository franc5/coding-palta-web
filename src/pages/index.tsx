import React from "react";

import * as _global from "../global";

// TODO: Load images using Gatsby images plugin
// @ts-ignore
import Home_0 from "../images/Home_0.jpg";

export default function IndexPage() {
  React.useEffect(function initParallaxes() {
    const parallaxes = document.querySelectorAll('.parallax');
    window.M.Parallax.init(parallaxes);
  }, []);

  return (
    <>
      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <h1 className="header center teal-text text-lighten-2">CodingPalta</h1>
            <div className="row center">
              <h3 className="header col s12 light">Nearshore software development</h3>
            </div>
          </div>
        </div>
        <div className="parallax">
          <img src={Home_0} alt="Coding Mac" />
        </div>
      </div>
    </>
  );
}

