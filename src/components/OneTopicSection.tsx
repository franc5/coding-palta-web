import React from "react";

interface Props {
  title: string;
  children: string | JSX.Element;
}

export default function OneTopicSection({ title, children }: Props) {
  return (
    <div className="container">
      <div className="section">
        <div className="row">
          <div className="col s12 center">
            <h4>{title}</h4>
            <div className="center-align light">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

