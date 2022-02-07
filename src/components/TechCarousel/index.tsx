import React from "react";

import * as _global from "../../global";

// Icons downloaded from https://vecta.io/symbols/25/web-technologies
import Android_Logo from "./icons/android.svg";
import Babel_Logo from "./icons/babel.svg";
import Cordova_Logo from "./icons/apache-cordova.svg";
import Electron_Logo from "./icons/electron.svg";
import Firebase_Logo from "./icons/firebase.svg";
import Github_Logo from "./icons/github.svg";
import Graphql_Logo from "./icons/graphql.svg";
import HTML5_Logo from "./icons/html5.svg";
import JS_Logo from "./icons/javascript.svg";
import MySQL_Logo from "./icons/mysql.svg";
import NodeJS_Logo from "./icons/nodejs.svg";
import PHP_Logo from "./icons/php.svg";
import Python_Logo from "./icons/python.svg";
import React_Logo from "./icons/react.svg";
import Sass_Logo from "./icons/sass.svg";
import TypeScript_Logo from "./icons/typescript.svg";

export default function TechCarousel() {
  React.useEffect(function initCarousel() {
    const carousels = document.querySelectorAll('.carousel');
    const carouselInstances = window.M.Carousel.init(carousels, {
      padding: 100,
      fullWidth: true,
    });

    // I had to do this workaround to make the carousel work
    const intervalId = setInterval(() => carouselInstances[0].next(), 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel">
      <a className="carousel-item"><img src={Android_Logo} /></a>
      <a className="carousel-item"><img src={Babel_Logo} /></a>
      <a className="carousel-item"><img src={Cordova_Logo} /></a>
      <a className="carousel-item"><img src={Electron_Logo} /></a>
      <a className="carousel-item"><img src={Firebase_Logo} /></a>
      <a className="carousel-item"><img src={Github_Logo} /></a>
      <a className="carousel-item"><img src={Graphql_Logo} /></a>
      <a className="carousel-item"><img src={HTML5_Logo} /></a>
      <a className="carousel-item"><img src={JS_Logo} /></a>
      <a className="carousel-item"><img src={MySQL_Logo} /></a>
      <a className="carousel-item"><img src={NodeJS_Logo} /></a>
      <a className="carousel-item"><img src={PHP_Logo} /></a>
      <a className="carousel-item"><img src={Python_Logo} /></a>
      <a className="carousel-item"><img src={React_Logo} /></a>
      <a className="carousel-item"><img src={Sass_Logo} /></a>
      <a className="carousel-item"><img src={TypeScript_Logo} /></a>
    </div>
  );
}

