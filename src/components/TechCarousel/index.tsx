import React from "react";

import * as _global from "../../global";

// Icons downloaded from https://vecta.io/symbols/25/web-technologies
import { ReactComponent as Android_Logo } from "./icons/android.svg";
import { ReactComponent as Babel_Logo } from "./icons/babel.svg";
import { ReactComponent as Cordova_Logo } from "./icons/apache-cordova.svg";
import { ReactComponent as Electron_Logo } from "./icons/electron.svg";
import { ReactComponent as Firebase_Logo } from "./icons/firebase.svg";
import { ReactComponent as Github_Logo } from "./icons/github.svg";
import { ReactComponent as Graphql_Logo } from "./icons/graphql.svg";
import { ReactComponent as HTML5_Logo } from "./icons/html5.svg";
import { ReactComponent as JS_Logo } from "./icons/javascript.svg";
import { ReactComponent as MySQL_Logo } from "./icons/mysql.svg";
import { ReactComponent as NodeJS_Logo } from "./icons/nodejs.svg";
import { ReactComponent as PHP_Logo } from "./icons/php.svg";
import { ReactComponent as Python_Logo } from "./icons/python.svg";
import { ReactComponent as React_Logo } from "./icons/react.svg";
import { ReactComponent as Sass_Logo } from "./icons/sass.svg";
import { ReactComponent as TypeScript_Logo } from "./icons/typescript.svg";

const LOGOS: Array<JSX.Element> = [
  Android_Logo,
  Babel_Logo,
  Cordova_Logo,
  Electron_Logo,
  Firebase_Logo,
  Github_Logo,
  Graphql_Logo,
  HTML5_Logo,
  JS_Logo,
  MySQL_Logo,
  NodeJS_Logo,
  PHP_Logo,
  Python_Logo,
  React_Logo,
  Sass_Logo,
  TypeScript_Logo,
];

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
      {LOGOS.map(LogoImageComponent => (
        <a className="carousel-item valign-wrapper">
          <LogoImageComponent />
        </a>
      ))}
    </div>
  );
}

