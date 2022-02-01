import React from "react";

import * as _global from "../global";

import OneTopicSection from "../components/OneTopicSection";

// TODO: Load images using Gatsby images plugin
// @ts-ignore
import Home_0 from "../images/Home_0.jpg";

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
            <h1 className="header center teal-text text-lighten-2">CodingPalta</h1>
            <div className="row center">
              <h3 className="header col s12 light">Nearshore software development</h3>
            </div>
          </div>
        </div>
        <div className="parallax">
          <img src={Home_0} alt="Coding Mac" />
        </div>
      </div>

      <div className="container">
        <div className="section">
          <OneTopicSection
            title="Who we are?"
            description={
              <>
                <p>
                  We are a team of professional software developers with more than six years of experience in web and mobile development.
                </p>
                <p>
                  We provide software development solutions to startups seeking to improve their productions using the newest technologies and the best practices.
                </p>
                <p>
                  Our work is supported by agile methodologies such as Scrum, always tailored to each different client and project.
                </p>
              </>
            }
          />
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="divider" />
        </div>
      </div>

      <div className="container">
        <div className="section">
          <OneTopicSection
            title="Partners and customers"
            description={
              <>
                <p>
                  We work together with <a href="https://woxlab.com" target="_blank">WoxLab LLC</a> with which we share some common clients and we are constantly seeking for new clients, always keeping our focus on startups.
                </p>
                <a href="https://woxlab.com" target="_blank">
                  <img src="https://woxlab.com/wp-content/uploads/2021/01/Woxlab.Logo-02.png" alt="WoxLab" width="252px" height="72px" />
                </a>
              </>
            }
          />
        </div>
      </div>

    </>
  );
}

