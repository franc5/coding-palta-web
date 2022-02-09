import React from "react";

interface Props {
  children: JSX.Element;
  image: string;
  imageInTheLeft?: boolean;
}

export default function SectionWithImage({ children, image, imageInTheLeft = false }: Props) {
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
      </div>
      {imageInTheLeft && content}
    </div>
  );
}

