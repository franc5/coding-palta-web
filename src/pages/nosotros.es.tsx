import React from "react";

import OneTopicSection from "../components/OneTopicSection";
import Divider from "../components/Divider";
import SectionWithImage from "../components/SectionWithImage";

import Me from "../images/Me.jpg";
import About_1 from "../images/About_1.jpg";
import { ReactComponent as LinkedIn_Logo } from "../images/linkedin.svg";

const LINKED_IN_LOGO_SIZE = 15;

const LinkedInLink = () => (
  <a href="https://www.linkedin.com/in/luisfranciscocosta/" target="_blank" title="See his profile at LinkedIn">
    <LinkedIn_Logo width={LINKED_IN_LOGO_SIZE} height={LINKED_IN_LOGO_SIZE} />
  </a>
);

export default function AboutPage() {
  return (
    <>
      <OneTopicSection title="Sobre CodingPalta">
        <SectionWithImage image={Me} epigraph="Ing. Luis Francisco Costa - Entrega de diplomas - Universidad Nacional del Sur">
          <>
            <p className="left-align">
              <b>CodingPalta</b> es una empresa de tecnología especializada en desarrollo de software.
            </p>
            <p className="left-align">
              Fue fundada en 2022 por <b>Ing. Luis Francisco Costa</b> ( <LinkedInLink /> ), un Ingeniero de Software graduado de la <a href="https://uns.edu.ar">Universidad Nacional del Sur</a> (Argentina) quien, luego de numerosos años trabajando con startups y habiendo entendido sus problemas y sus necesidades, decidió fundar <b>CodingPalta</b> para ayudar a las startups a potencias su crecimiento.
            </p>
            <p className="left-align">
              Para alcanzar este objetivo, usamos las últimas tecnologías y seguimos las mejores prácticas de la industria para desarrollar software de la más alta calidad.
            </p>
            <p className="left-align">
              Tenemos basta experiencia trabajando con startups y sabemos como ayudarlas a crecer.
            </p>
          </>
        </SectionWithImage>
      </OneTopicSection>

      <Divider />

      <OneTopicSection title="¿Cómo trabajamos?">
        <SectionWithImage image={About_1} imageInTheLeft>
          <>
            <p className="left-align">
              <b>Trabajo en equipo:</b> En CodingPalta creemos que el trabajo en equipo y la sinergía son los motores esenciales para llevar cualquier proyecto adelante y conseguir los mejores resultados.
            </p>
            <p className="left-align">
              <b>Compromiso:</b> En CodingPalta entendemos cada trabajo como un compromiso para con nuestros clientes y valoramos enormemente la confianza que depositan en nosotros.
            </p>
            <p className="left-align">
              <b>Profesionalismo:</b> En CodingPalta trabajamos diariamente para convertirnos en mejores profesionales, es por esto que la capacitación constante es un deber para nosotros.
            </p>
          </>
        </SectionWithImage>
      </OneTopicSection>

    </>
  );
}

