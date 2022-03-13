import React from "react";

import * as _global from "../global";

import ConsultingPage, { ConsultingPageTexts } from "../components/ConsultingPage";

const TEXTS: ConsultingPageTexts = {
  mainSection: {
    title: "Software Consulting",
    content: (
      <>
        <p>
          Usually, the software consulting starts with a 3-hour initial meeting. This is how we get to know the clients’ business, their plans for the future, and the path chosen in technology.
        </p>
        <p>
          Everything that is analyzed and recorded in a document to be able to take it as reference in the following steps.
        </p>
        <p>
          After the initial meeting is over, the number of minimum required meetings to complete the survey and provide appropriate advice will be estimated. 
        </p>
      </>
    ),
  },
  actions: {
    title: "What are the actions that can be carried out with this consulting?",
    content: [
      "Business review.",
      "Legacy systems review.",
      "Digitizable processes review (Digital Transformation).",
      "Computer infrastructure (IT) review.",
      "Requirements analysis.",
      "Existing software products analysis and recommendations.",
      "Future development planning.",
      "Development requirements advice.",
      "Services budgets analysis and recommendations.",
      "Implementation support.",
      "Software architectures advice.",
      "Mockups & prototypes.",
      "Programming technologies recommendations.",
      "Work teams planning.",
      "Project management.",
      "Focus Groups and user interviews.",
      "User experience design (UX).",
    ],
  },
}

export default function ConsultingPageEn() {
  return <ConsultingPage {...TEXTS} />;
}

