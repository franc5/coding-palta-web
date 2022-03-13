import React from "react";
import { Link } from "gatsby";

import * as _global from "../global";

import OneTopicSection from "../components/OneTopicSection";
import SectionWithImage from "../components/SectionWithImage";

import Customized_0 from "../images/Customized_0.jpg";

export interface CustomizedSoftwareTexts {
  mainSection: {
    title: string;
    subtitle: string;
    content: JSX.Element;
  };
  quote: string;
  principles: {
    title: string;
    subtitle: string;
    content: string[];
  };
  contactLink?: "en" | "es";
}

export default function CustomizedSoftware({ mainSection, quote, principles, contactLink = "en" }: CustomizedSoftwareTexts) {
  return (
    <>
      <OneTopicSection title={mainSection.title}>
        <>
          <p>{mainSection.subtitle}</p>

          <SectionWithImage image={Customized_0}>
            <div>{mainSection.content}</div>
          </SectionWithImage>

          <blockquote style={{
            textAlign: "left",
            borderColor: "#009688",
            fontSize: "20px",
          }}>
            {quote}
          </blockquote>

          <p>&nbsp;</p>

          <h5 style={{ textAlign: "left" }}>{principles.title}</h5>

          <p style={{ textAlign: "left" }}>{principles.subtitle}</p>

          <ol>
            {principles.content.map(principle => <li key={principle} style={{ textAlign: "left" }}>{principle}</li>)}
          </ol>

          <p>&nbsp;</p>

          {contactLink == "en"
            ? <p>Do you want to know more? <Link to="/contact">Let's get in touch</Link>.</p>
            : <p>¿Quiéres saber más? <Link to="/es/contacto">Pongámonos en contacto</Link>.</p>
          }
        </>
      </OneTopicSection>
    </>
  );
}

