import React from "react";

import OneTopicSection from "../components/OneTopicSection";
import Divider from "../components/Divider";
import SectionWithImage from "../components/SectionWithImage";

import About_0 from "../images/About_0.jpg";
import About_1 from "../images/About_1.jpg";
import { ReactComponent as LinkedIn_Logo } from "../images/linkedin.svg";

const LINKED_IN_LOGO_SIZE = 15;

const LinkedInLink = () => (
  <a href="https://www.linkedin.com/in/luisfranciscocosta/" target="_blank" title="See his profile at LinkedIn">
    <LinkedIn_Logo width={LINKED_IN_LOGO_SIZE} height={LINKED_IN_LOGO_SIZE} />
  </a>
);

export default function AboutPage() {
  return (
    <>
      <OneTopicSection title="About CodingPalta">
        <SectionWithImage image={About_0}>
          <p className="left-align">
            <b>CodingPalta</b> is a is a technology company specialized in software development.
            <br />
            It was founded in 2022 by <b>Eng. Luis Francisco Costa</b> ( <LinkedInLink /> ) aiming to be a company which provides software development solutions for startups.
            <br />
            To reach these goals, we use the newest technologies and follow the best practice in order to develop high quality software.
            <br />
            We have extensive experience working with startups and we know how to help them grow.
          </p>
        </SectionWithImage>
      </OneTopicSection>

      <Divider />

      <OneTopicSection title="How we wok?">
        <SectionWithImage image={About_1} imageInTheLeft>
          <p className="left-align">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </SectionWithImage>
      </OneTopicSection>

    </>
  );
}

