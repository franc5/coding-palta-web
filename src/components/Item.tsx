import React from "react";
import { Link } from "gatsby";

import { LANGS, getLangFromPathname } from "../utils/lang";

export interface Service {
  icon: string;
  title: string;
  description: string;
  to: string;
}

export default function Item({ icon, title, description, to }: Service) {
  const lang = getLangFromPathname(to);

  return (
    <div className="col s12 m4">
      <div className="icon-block">
        <h2 className="center teal-text">
          <i className="material-icons">{icon}</i>
        </h2>
        <h5 className="center">{title}</h5>
        <p className="center light">
          {description}
          &nbsp;
          <Link to={to}>
            {(lang == LANGS.EN) ? "Read more" : "Seguir leyendo"}
          </Link>
        </p>
      </div>
    </div>
  );
}

