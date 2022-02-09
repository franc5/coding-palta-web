import React from "react";

import OneTopicSection from "../components/OneTopicSection";
import SectionWithImage from "../components/SectionWithImage";

import About_0 from "../images/About_0.jpg";
import { ReactComponent as LinkedIn_Logo } from "../images/linkedin.svg";

const LINKED_IN_LOGO_SIZE = 15;

const LinkedInLink = () => (
  <a href="https://www.linkedin.com/in/luisfranciscocosta/" target="_blank" title="See his profile at LinkedIn">
    <LinkedIn_Logo width={LINKED_IN_LOGO_SIZE} height={LINKED_IN_LOGO_SIZE} />
  </a>
);

export default function AboutPage() {
  return (
    <div className="container">
      <div className="section">

        <OneTopicSection
          title="About CodingPalta"
          description={
            <SectionWithImage image={About_0}>
              <p className="left-align">
                CodingPalta is a is a technology company specialized in software development.
                It was founded in 2022 by Eng. Luis Francisco Costa ( <LinkedInLink /> ) aiming to be a company which provides software development solutions for startups.
                <br />
                To reach these goals, we use the newest technologies and follow the best practice in order to develop high quality software.
              </p>
            </SectionWithImage>
          }
        />

      </div>
    </div>
  );
}

