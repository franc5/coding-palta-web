import React from "react";

import OneTopicSection from "../components/OneTopicSection";
import Divider from "../components/Divider";
import SectionWithImage from "../components/SectionWithImage";

import About_0 from "../images/About_0.jpg";
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
        <SectionWithImage image={About_0}>
          <p className="left-align">
            <b>CodingPalta</b> es una empresa de tecnología especializada en desarrollo de software.
            <br />
            Fue fundada 2022 por <b>Ing. Luis Francisco Costa</b> ( <LinkedInLink /> ) con la intensión de ser una empresa que provea soluciones en desarrollo de software para startups.
            <br />
            Para alcanzar este objetivo, usamos las últimas tecnologías y seguimos las mejores prácticas de la industria para desarrollar software de la más alta calidad.
            <br />
            Tenemos basta experiencia trabajando con startups y sabemos como ayudarlas a crecer.
          </p>
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

