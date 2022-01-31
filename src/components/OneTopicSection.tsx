import React from "react";

interface Props {
  title: string;
  description: string | JSX.Element;
}

export default function OneTopicSection({ title, description }: Props) {
  return (
    <div className="row">
      <div className="col s12 center">
        <h4>{title}</h4>
        <p className="center-align light">{description}</p>
      </div>
    </div>
  );
}

