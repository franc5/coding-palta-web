import React from "react";
import { Link } from "gatsby";

import Item, { Service } from "../components/Item";
import OneTopicSection from "../components/OneTopicSection";

const SERVICES: Array<Service> = [{
  icon: "access_time",
  title: "Time & Materials",
  description: "Es una forma de staff augmentation donde nosotros gestionamos al desarrollador pero trabajamos junto con usted o quien fuere que esté a cargo del proyecto. Puede ser una cantidad de tiempo fija o indefinida. Todo se hace más simple y dinámico",
}, {
  icon: "group",
  title: "Staff Augmentation",
  description: "Le proveemos de especialistas para roles especificos. Por ejemplo, un desarrollador de software para sumarse a su equipo de desarrollo. Se cobra por hora (o un monto fijo según)",
}, {
  icon: "attach_money",
  title: "Llave en mano",
  description: "Nosotros nos encargamos de todo en el proyecto, definimos los requerimientos a partir de un análisis profundo de su idea, estimamos el tiempo de desarrollo y trabajamos en el hasta que todas las partes consideran que los requerimientos se alcanzaron. Si los requerimientos cambios, todo es reevaluado",
}];

export default function ServicesPage() {
  return (
    <OneTopicSection title="Nuestros servicios">
      <>
        <p>
          En CodingPalta proveemos servicios de desarrollo de software profesional para startups. Para satisfacer las necesidades de nuestros clients y adaptarnos a cada uno de ellos, ofrecemos una amplia gma de servicios y métodos de contratación, tales como <b>Staff Augmentation</b>, <b>Time & Materials</b> y <b>Precio fijo</b>. Encuentre debajo una breve descripción de cada uno de los métodos de contratatión:
        </p>

        <div className="row">
          {SERVICES.map(service => <Item key={service.icon} {...service} />)}
        </div>

        <div className="row">
          <div className="col s12 center">
            <p className="light">
              ¿Quiéres saber más? <Link to="/contacto">Pongámonos en contacto</Link>.
            </p>
          </div>
        </div>
      </>
    </OneTopicSection>
  );
}

