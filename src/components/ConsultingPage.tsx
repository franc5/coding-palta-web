import React from "react";
import { Link } from "gatsby";

import * as _global from "../global";

import OneTopicSection from "../components/OneTopicSection";

export interface ConsultingPageTexts {
  mainSection: {
    title: string;
    content: string | JSX.Element;
  };
  actions: {
    title: string;
    content: string[];
  };
  contactLink?: "en" | "es";
}

export default function ConsultingPage({ mainSection, actions, contactLink = "en" }: ConsultingPageTexts) {
  return (
    <>
      <OneTopicSection title={mainSection.title}>
        <>
          <p>{mainSection.content}</p>

          <p>&nbsp;</p>

          <h5 style={{ textAlign: "left" }}>{actions.title}</h5>

          <ol>
            {actions.content.map(action => <li key={action} style={{ textAlign: "left" }}>{action}</li>)}
          </ol>

          {contactLink == "en"
            ? <p>Do you want to know more? <Link to="/contact">Let's get in touch</Link>.</p>
            : <p>¿Quiéres saber más? <Link to="/es/contacto">Pongámonos en contacto</Link>.</p>
          }
        </>
      </OneTopicSection>
    </>
  );
}

