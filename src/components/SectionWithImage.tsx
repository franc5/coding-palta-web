import React from "react";

interface Props {
  children: JSX.Element;
  image: string;
}

  export default function SectionWithImage({ children, image }: Props) {
  return (
    <div className="row">
      <div className="col l6 s12">
        {children}
      </div>
      <div className="col l6 hide-on-med-and-down">
        <img className="responsive-img" src={image} />
      </div>
    </div>
  );
}

