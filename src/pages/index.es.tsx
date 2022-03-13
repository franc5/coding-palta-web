import React from "react";

import * as _global from "../global";

import Divider from "../components/Divider";
import Item, { Service } from "../components/Item";
import OneTopicSection from "../components/OneTopicSection";
import TechCarousel from "../components/TechCarousel";

// TODO: Load images using Gatsby images plugin
// @ts-ignore
import Home_0 from "../images/Home_0.jpg";

const SERVICES: Array<Service> = [{
  icon: "phone_android",
  title: "Apps móviles",
  description: "Desarrollamos tanto aplicaciones nativas como híbridas en función de sus necesidades. Le recomendamos la mejor alternativa para su negocio y la implementamos usando las últimas tecnologías y diseños pensados para que sus usuarios tengan la mejor experiencia posible.",
  to: "/es/appmoviles",
}, {
  icon: "web",
  title: "Software a medida",
  description: "Implementamos software a medida acorde a sus necesidades. Usamos metodologías ágiles para cumplir con los requerimientos mientras nos enfocamos en la calidad y la usabilidad del producto.",
  to: "/es/customizado",
}, {
  icon: "question_answer",
  title: "Consultoría",
  description: "Proveemos servicios de consultoria de software en general. Realizamos análisis técnicos de proyectos y lo asesoramos sobre los diferentes aspectos del desarrollo de software.",
  to: "/es/consultoria",
}];

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
            <h1 className="header center blue-grey-text">CodingPalta</h1>
            <div className="row center">
              <h3 className="header col s12 light blue-grey-text">Desarrollo de software profesional para startups</h3>
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

      <OneTopicSection title="Servicios">
        <>
          <p>
            En CodingPalta proveemos servicios profesionales de desarrollo de software para <b>startups</b>. Nos enfocamos en el desarrollo de aplicaciones móviles y web, pero también proveemos servicios de consultoría de software en general.
          </p>

          <div className="row">
            {SERVICES.map(service => <Item key={service.icon} {...service} />)}
          </div>
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

