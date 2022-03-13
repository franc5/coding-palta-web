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
      "list": [{
        "text": "Mobile apps",
        "url": "/mobileapps",
      }, {
        "text": "Customized software",
        "url": "/customized",
      }, {
        "text": "Consulting",
        "url": "/consulting",
      }],
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
      "list": [{
        "text": "Apps móviles",
        "url": "/es/appsmoviles",
      }, {
        "text": "Software a medida",
        "url": "/es/customizado",
      }, {
        "text": "Consultoría",
        "url": "/es/consultoria",
      }],
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

interface ServicesMenuProps {
  lang: LANGS;
  show?: boolean;
  smallScreen?: boolean;
  closeSideNav?: () => void;
}

function ServicesMenu({ lang, show = true, smallScreen = false, closeSideNav }: ServicesMenuProps) {
  const largeScreenStyles = {
    display: show ? "block" : "none",
    position: "absolute",
    width: "200px",
    backgroundColor: "#fff",
    zIndex: "1000",
    boxShadow: "0 20px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%)"
  }

  const smallScreenStyles = {}

  return (
    <ul style={!smallScreen ? largeScreenStyles : smallScreenStyles}>
      {LOCALE[lang].services.list.map(service => (
        <li
          key={service.url}
          style={{ width: "100%" }}
          onClick={closeSideNav}
        >
          <Link to={service.url}>{service.text}</Link>
        </li>
      ))}
    </ul>
  );
}

interface NavbarLinksProps {
  lang: LANGS;
}

export default function NavbarLinks({ lang }: NavbarLinksProps): JSX.Element {
  const [showServicesMenu, setShowServiceMenu] = React.useState<boolean>(false);

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
      <li
        className="hide-on-med-and-down"
        style={{ position: "relative" }}
        onMouseOver={() => setShowServiceMenu(true)}
        onMouseLeave={() => setShowServiceMenu(false)}
      >
        <a>
          {LOCALE[lang].services.text}
          <i className="material-icons right">arrow_drop_down</i>
        </a>
        <ServicesMenu lang={lang} show={showServicesMenu} />
      </li>

      <li className="hide-on-large-only">
        <ServicesMenu
          lang={lang}
          smallScreen
          closeSideNav={closeSideNav}
        />
      </li>

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

