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
          <>
            <p className="left-align">
              <b>Teamwork:</b> In CodingPalta we believe that teamwork and synergy are the essential engines to drive any project forward and achieve the best results.
            </p>
            <p className="left-align">
              <b>Commitment:</b> In CodingPalta we understand each job as a commitment to our clients and we greatly value the trust they place in us.
            </p>
            <p className="left-align">
              <b>Professionalism:</b> In CodingPalta we work daily to become better professionals, that's why constant training is a must for us.
            </p>
          </>
        </SectionWithImage>
      </OneTopicSection>

    </>
  );
}

