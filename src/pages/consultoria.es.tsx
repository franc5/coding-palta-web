import React from "react";

import * as _global from "../global";

import ConsultingPage, { ConsultingPageTexts } from "../components/ConsultingPage";

const TEXTS: ConsultingPageTexts = {
  mainSection: {
    title: "Consultoría de Software",
    content: (
      <>
        <p>
          Generalmente la consultoría comienza con una reunión inicial de 3 horas donde se busca conocer el negocio, los planes de la compañía a futuro y el camino recorrido en la tecnología.
        </p>
        <p>
          Todo lo analizado es registrado en un documento para dejar constancia y poder tomarlo como referencia en los pasos siguientes.
        </p>
        <p>
          Una vez finalizada la reunión inicial, se estimaran la cantidad de reuniones restantes mínimas requeridas para completar el relevamiento y brindar el asesoramiento acorde.
        </p>
      </>
    ),
  },
  actions: {
    title: "¿Cuales son las acciones que pueden llevarse adelante con esta consultoría?",
    content: [
     "Revisión del negocio",
     "Revisión de sistemas legados (existentes)",
     "Revisión de procesos digitalizables (Transformación digital)",
     "Revisión de infraestructura informática",
     "Análisis de requerimientos",
     "Análisis y recomendación de productos de software existentes en el mercado",
     "Confecció de planes de desarrollo futuro",
     "Asesoramiento en confecció de pliegos de desarrollo",
     "Solicitud y análisis de presupuestos de software o servicios IT",
     "Acompañamiento en implementaciones",
     "Diagramado de soluciones y arquitecturas",
     "Creació de bocetos y/o prototipos",
     "Análisis de tecnologías de programación para el desarrollo",
     "Confecció de equipos de trabajo",
     "Liderazgo de proyectos",
     "Focus Groups y entrevistas con usuarios",
     "Diseño de experiencias de usuario (UX)",
    ],
  },
  contactLink: "es",
}

export default function ConsultingPageEn() {
  return <ConsultingPage {...TEXTS} />;
}

