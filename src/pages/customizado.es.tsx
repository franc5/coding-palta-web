import React from "react";

import * as _global from "../global";

import CustomizedSoftware, { CustomizedSoftwareTexts } from "../components/CustomizedSoftwarePage";

const TEXTS: CustomizedSoftwareTexts = {
  mainSection: {
    title: "Software a medida",
    subtitle: "El software a medida permitirá la concreción de sus ideas, alcanzar los objetivos que su software enlatado no puede cubrir y aumentar el valor de su compañía.",
    content: (
      <>
        <p>Mediante el uso de la metodología de trabajo ágil denominada SCRUM, nuestro equipo de personas desarrolla un software que cumple con los requisitos, deseos y motivaciones de nuestros clientes. Centramos nuestro trabajo en incrementar al máximo la experiencia de los usuarios que utilizaran los desarrollos, generando altos niveles de aceptación y satisfacción.</p>
        <p>El entorno de trabajo de las empresas del conocimiento se parece muy poco al que originó la gestión de proyectos predictiva. Ahora se necesitan estrategias para el lanzamiento de productos orientadas a la entrega temprana de resultados tangibles y a la respuesta ágil y flexible, necesaria para trabajar en mercados de evolución rápida.</p>
        <p>Ahora se construye el producto al mismo tiempo que se modifican e introducen nuevos requisitos. El cliente parte de una visión medianamente clara, pero el nivel de innovación que requiere, y la velocidad a la que se mueve el entorno de su negocio, no le permiten prever con detalle cómo será el resultado final.</p>
      </>
    ),
  },
  quote: "La gestión de proyectos ágil no se formula sobre la necesidad de anticipación, sino sobre la de adaptación continua.",
  principles: {
    title: "Principios del Desarrollo Ágil",
    subtitle: "El manifiesto ágil, establece estos 12 principios:",
    content: [
      "Nuestra principal prioridad es satisfacer al cliente a través de la entrega temprana y continua de software de valor.",
      "Son bienvenidos los requisitos cambiantes, incluso si llegan tarde al desarrollo. Los procesos ágiles se adaptan al cambio como ventaja competitiva para el cliente.",
      "Entregar con frecuencia software que funcione, en periodos de un par de semanas hasta un par de meses, con preferencia en los periodos breves.",
      "Las personas del negocio y los desarrolladores deben trabajar juntos de forma cotidiana a través del proyecto.",
      "Construcción de proyectos en torno a individuos motivados, dándoles la oportunidad y el respaldo que necesitan y procurándoles confianza para que realicen la tarea.",
      "La forma más eficiente y efectiva de comunicar información de ida y vuelta dentro de un equipo de desarrollo es mediante la conversación cara a cara.",
      "El software que funciona es la principal medida del progreso.",
      "Los procesos ágiles promueven el desarrollo sostenido. Los patrocinadores, desarrolladores y usuarios deben mantener un ritmo constante de forma indefinida.",
      "La atención continua a la excelencia técnica enaltece la agilidad.",
      "La simplicidad como arte de maximizar la cantidad de trabajo que no se hace, es esencial.",
      "Las mejores arquitecturas, requisitos y diseños emergen de equipos que se autoorganizan.",
      "En intervalos regulares, el equipo reflexiona sobre la forma de ser más efectivo y ajusta su conducta en consecuencia.",
    ],
  },
  contactLink: "es",
}

export default function CustomizedSoftwareEn() {
  return <CustomizedSoftware {...TEXTS} />;
}

