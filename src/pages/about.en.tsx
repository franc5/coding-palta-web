import React from "react";

import OneTopicSection from "../components/OneTopicSection";

export default function AboutPage() {
  return (
    <div className="container">
      <div className="section">

        <OneTopicSection
          title="About CodingPalta"
          description={
            <p>
              CodingPalta is a is a technology company specialized in software development.
              It was founded in 2022 by Eng. Luis Francisco Costa (see his profile on LinkedIn) aiming to be a company which provides software development solutions to startups.
              <br />
              To reach these goals, we use the newest technologies and follow the best practise in order to develop high quality software.
            </p>
          }
        />

      </div>
    </div>
  );
}

