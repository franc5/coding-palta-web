import React from "react";
import { Link } from "gatsby";

import * as _global from "../global";

import MobileAppsPage, { MobileAppsPageTexts } from "../components/MobileAppsPage";

const TEXTS: MobileAppsPageTexts = {
  mainSection: {
    title: "Desarrollo de Apps Móviles",
    content: "Desarrollamos aplicaciones móviles tanto nativas como híbridas, de esa forma podemos adaptar el desarrollo al presupuesto disponible y a las expectativas del proyecto.",
  },
  nativeAppsSection: {
    title: "Apps Nativas",
    content: (
      <>
        <p>
          Una aplicación nativa es la que se desarrolla de forma específica para un determinado sistema operativo móvil. Cada una de las plataformas, Android e iOS, tienen un sistema diferente, por lo que si quiere que su app esté disponible en todas las plataformas se deberán de crear varias apps con el lenguaje del sistema operativo seleccionado.
        </p>
        <p>
          Las aplicaciones nativas suelen ser más costosas y requieren de más tiempo para su desarrollo. Como contrapartida tienen la ventaja de poder utilizar de forma más eficiente todas las características del hardware del dispositivo y las últimas características del sistema operativo. El resultado final es una aplicación con mejor rendimiento y por consiguiente con mayor usabilidad.
        </p>
      </>
    ),
  },
  hybridAppsSection: {
    title: "Apps Híbridas",
    content: (
      <>
        <p>
          Las aplicaciones híbridas son desarrollados con una tecnología en común para todos los teléfonos y eso reduce su costo de desarrollo. En la actualidad , debido al gran avance tecnológico de los teléfonos existentes, las diferencias entre aplicaciones nativas e híbridas es cada vez menor.
        </p>
        <p>
          Dependiendo de sus necesidades, podemos desarrollar su app como una web app también prácticamente con el mismo esfuerzo, lo cual torna a las apps híbridas en una gran opción para casi todas las startup.
        </p>
      </>
    ),
  },
  contactLink: (
    <>
      ¿Quiéres saber más? <Link to="/es/contacto">Pongámonos en contacto</Link>.
    </>
  ),
}

export default function MobileAppsPageEs() {
  return <MobileAppsPage {...TEXTS} />;
}


