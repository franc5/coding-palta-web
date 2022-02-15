import React from "react";
import { Link } from "gatsby";

import { LANGS } from "../utils/lang";

import * as _global from "../global";

import EN_FLAG from "./img/en.png";
import ES_FLAG from "./img/es.png";

const LOCALE = {
  [LANGS.EN]: {
    "services": {
      "text": "Services",
      "url": "/services",
    },
    "about": {
      "text": "About Us",
      "url": "/about",
    },
    "blog": {
      "text": "Blog",
      "text_2": "soon",
      "alert": "We are working hard on our blog, it will be available pretty soon!",
    },
    "contact": {
      "text": "Contact",
      "url": "/contact",
    },
    "lang": {
      "text": "Versión en Español",
      "url": "/es",
    },
  },
  [LANGS.ES]: {
    "services": {
      "text": "Servicios",
      "url": "/es/servicios",
    },
    "about": {
      "text": "Nosotros",
      "url": "/es/nosotros",
    },
    "blog": {
      "text": "Blog",
      "text_2": "pronto",
      "alert": "Estamos trabajando en nuestro blog, estará disponible pronto!",
    },
    "contact": {
      "text": "Contacto",
      "url": "/es/contacto",
    },
    "lang": {
      "text": "English version",
      "url": "/",
    },
  },
}

interface NavbarLinksProps {
  lang: LANGS;
}

export default function NavbarLinks({ lang }: NavbarLinksProps): JSX.Element {
  const closeSideNav = () => {
    const sideNav = document.querySelector('.sidenav');
    window.M.Sidenav.getInstance(sideNav)?.close();
  }

  const showToastMessage = () => {
    window.M.toast({ html: LOCALE[lang].blog.alert });
    closeSideNav();
  }

  return (
    <>
      <li onClick={closeSideNav}><Link to={LOCALE[lang].services.url}>{LOCALE[lang].services.text}</Link></li>
      <li onClick={closeSideNav}><Link to={LOCALE[lang].about.url}>{LOCALE[lang].about.text}</Link></li>
      <li onClick={showToastMessage}><Link to="#">{LOCALE[lang].blog.text}<sup>({LOCALE[lang].blog.text_2})</sup></Link></li>
      <li onClick={closeSideNav}><Link to={LOCALE[lang].contact.url}>{LOCALE[lang].contact.text}</Link></li>
      <li onClick={closeSideNav}>
        <Link to={LOCALE[lang].lang.url}>
          <img src={(lang == LANGS.EN) ? ES_FLAG : EN_FLAG} /> {LOCALE[lang].lang.text}
        </Link>
      </li>
    </>
  );
}

