import React from "react";

interface Props {
  children: JSX.Element;
  image: string;
  imageInTheLeft?: boolean;
  epigraph?: string;
}

export default function SectionWithImage({ children, image, imageInTheLeft = false, epigraph }: Props) {
  const content = (
    <div className="col l6 s12">
      {children}
    </div>
  );

  return (
    <div className="row">
      {!imageInTheLeft && content}
      <div className="col l6 hide-on-med-and-down">
        <img className="responsive-img" src={image} />
        {epigraph && <div>{epigraph}</div>}
      </div>
      {imageInTheLeft && content}
    </div>
  );
}

