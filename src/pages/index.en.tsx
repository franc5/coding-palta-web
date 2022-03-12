import React from "react";

import * as _global from "../global";

import Divider from "../components/Divider";
import Item, { Service } from "../components/Item";
import OneTopicSection from "../components/OneTopicSection";
import TechCarousel from "../components/TechCarousel";

// TODO: Load images using Gatsby images plugin
// @ts-ignore
import Home_0 from "../images/Home_0.jpg";

const SERVICES: Array<Service> = [{
  icon: "phone_android",
  title: "Mobile Apps",
  description: "We develop native or hybrid apps according to your needs. We recommend the best alternative for your business and we implement the app using the latest technologies and amazing designs to make your users' experience the best.",
  to: "/mobileapps",
}, {
  icon: "web",
  title: "Web Apps",
  description: "We implement your web app (both frontend and backend) according to your needs. We focus on the user experience so that your customers are fully satisfied when using your web app.",
  to: "/webapps",
}, {
  icon: "question_answer",
  title: "Consulting",
  description: "We provide general software consulting. We carry out technical analysis of project and we advice you regarding different aspects of software development.",
  to: "/consulting",
}];

export default function IndexPage() {
  React.useEffect(function initParallaxes() {
    const parallaxes = document.querySelectorAll('.parallax');
    window.M.Parallax.init(parallaxes);
  }, []);

  return (
    <>
      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <h1 className="header center blue-grey-text">CodingPalta</h1>
            <div className="row center">
              <h3 className="header col s12 light blue-grey-text">Professional software development for startups</h3>
            </div>
          </div>
        </div>
        <div className="parallax">
          <img src={Home_0} alt="Coding Mac" />
        </div>
      </div>

      <OneTopicSection title="Who we are?">
        <>
          <p>
            We are a team of professional software developers with more than six years of experience in web and mobile development.
          </p>
          <p>
            We provide software development solutions for startups seeking to improve their products using the newest technologies and the best practices of the industry.
          </p>
          <p>
            Our work is supported by agile methodologies such as Scrum, always tailored to each client and project.
          </p>
        </>
      </OneTopicSection>

      <Divider />

      <OneTopicSection title="Our Services">
        <>
          <p>
            In CodingPalta we provide professional software development services for <b>startups</b>. We focus on mobile and web apps development, but we also provide general software consulting services.
          </p>

          <div className="row">
            {SERVICES.map(service => <Item key={service.icon} {...service} />)}
          </div>
        </>
      </OneTopicSection>

      <Divider />

      <OneTopicSection title="Technologies">
        <>
          <p>
            In CodingPalta we use the best technologies to provide high quality software development services.
          </p>
          <TechCarousel />
        </>
      </OneTopicSection>

      <Divider />

      <OneTopicSection title="Partners and customers">
        <>
          <p>
            We work with <a href="https://woxlab.com" target="_blank">WoxLab LLC</a> with whom we share some common clients. And we are constantly seeking for new startups to work with.
          </p>
          <a href="https://woxlab.com" target="_blank">
            <img src="https://woxlab.com/wp-content/uploads/2021/01/Woxlab.Logo-02.png" alt="WoxLab" width="252px" height="72px" />
          </a>
        </>
      </OneTopicSection>

    </>
  );
}

