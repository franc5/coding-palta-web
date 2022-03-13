import React from "react";

import * as _global from "../global";

import OneTopicSection from "../components/OneTopicSection";
import SectionWithImage from "../components/SectionWithImage";

// TODO: Load images using Gatsby images plugin
// @ts-ignore
import NativeApps from "../images/NativeApps.jpg";
import HybridApps from "../images/HybridApps.jpg";

export interface MobileAppsPageTexts {
  mainSection: {
    title: string;
    content: string;
  };
  nativeAppsSection: {
    title: string;
    content: string | JSX.Element;
  };
  hybridAppsSection: {
    title: string;
    content: string | JSX.Element;
  };
  contactLink: string | JSX.Element;
}

export default function MobileAppsPage({ mainSection, nativeAppsSection, hybridAppsSection, contactLink }: MobileAppsPageTexts) {
  return (
    <>
      <OneTopicSection title={mainSection.title}>
        <>
          <p>{mainSection.content}</p>

          <SectionWithImage image={NativeApps}>
            <>
              <h5>{nativeAppsSection.title}</h5>
              <div>{nativeAppsSection.content}</div>
            </>
          </SectionWithImage>

          <p>&nbsp;</p>

          <SectionWithImage image={HybridApps} imageInTheLeft>
            <>
              <h5>{hybridAppsSection.title}</h5>
              <div>{hybridAppsSection.content}</div>
            </>
          </SectionWithImage>

          <p>
            {contactLink}
          </p>

        </>
      </OneTopicSection>
    </>
  );
}

