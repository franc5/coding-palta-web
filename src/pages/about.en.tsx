import React from "react";

import OneTopicSection from "../components/OneTopicSection";
import Divider from "../components/Divider";
import SectionWithImage from "../components/SectionWithImage";

import Me from "../images/Me.jpg";
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
        <SectionWithImage image={Me} epigraph="Eng. Luis Francisco Costa">
          <>
            <p className="left-align">
              <b>CodingPalta</b> is a is a technology company specialized in software development.
            </p>
            <p className="left-align">
              It was founded in 2022 by <b>Eng. Luis Francisco Costa</b> ( <LinkedInLink /> ), a Software Engineer with a degree from the <a href="https://uns.edu.ar">National University of the South</a> (Argentina) whom, after several years of working with startups and having understood their problems and their needs, decided to found <b>CodignPalta</b> to help startups to enhance their growth.
            </p>
            <p className="left-align">
              To reach these goals, in <b>CodingPalta</b> we use the newest technologies and follow the best practices in order to develop high quality software.
            </p>
            <p className="left-align">
              We have extensive experience working with startups and we know how to help them grow.
            </p>
          </>
        </SectionWithImage>
      </OneTopicSection>

      <Divider />

      <OneTopicSection title="How we work?">
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

