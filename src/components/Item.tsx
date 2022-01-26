import React from "react";

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export default function Item({ icon, title, description }: Service) {
  return (
    <div className="col s12 m4">
      <div className="icon-block">
        <h2 className="center teal-text">
          <i className="material-icons">{icon}</i>
        </h2>
        <h5 className="center">{title}</h5>
        <p className="center light">{description}</p>
      </div>
    </div>
  );
}

