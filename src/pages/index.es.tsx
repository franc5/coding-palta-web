import React from "react";

import * as _global from "../global";

import Divider from "../components/Divider";
import OneTopicSection from "../components/OneTopicSection";
import TechCarousel from "../components/TechCarousel";

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
              <h3 className="header col s12 light">Desarrollo de software profesional para startups</h3>
            </div>
          </div>
        </div>
        <div className="parallax">
          <img src={Home_0} alt="Coding Mac" />
        </div>
      </div>

      <OneTopicSection title="¿Quiénes somos?">
        <>
          <p>
            Somos un equipo de desarrolladores de software profesionales con más de seis años de experiencia en desarrollo web y móvil.
          </p>
          <p>
            Proveemos soluciones de desarrollo de software para startups que buscan mejorar sus productos usando las últimas tecnologías y las mejores prácticas de la industria.
          </p>
          <p>
            Nuestro trabajo se apolla en el uso de metodologías ágiles de desarrollo como Scrum, siempre de acuerdo con las necesidades de cada cliente y proyecto.
          </p>
        </>
      </OneTopicSection>

      <Divider />

      <OneTopicSection title="Tecnologías">
        <>
          <p>
            En CodingPalta usamos las mejores tecnologías para proveer servicios de desarrollo de software de alta calidad.
          </p>
          <TechCarousel />
        </>
      </OneTopicSection>

      <Divider />

      <OneTopicSection title="Clientes y socios comerciales">
        <>
          <p>
            Trabajamos junto con <a href="https://woxlab.com" target="_blank">WoxLab LLC</a> con quienes compartimos algunos clientes. Estamos en constante busqueda de nuevas startups con quienes trabajar.
          </p>
          <a href="https://woxlab.com" target="_blank">
            <img src="https://woxlab.com/wp-content/uploads/2021/01/Woxlab.Logo-02.png" alt="WoxLab" width="252px" height="72px" />
          </a>
        </>
      </OneTopicSection>

    </>
  );
}

