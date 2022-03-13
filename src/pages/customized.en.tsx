import React from "react";

import * as _global from "../global";

import CustomizedSoftware, { CustomizedSoftwareTexts } from "../components/CustomizedSoftwarePage";

const TEXTS: CustomizedSoftwareTexts = {
  mainSection: {
    title: "Customized Software",
    subtitle: "Customized software will allow you to realize your ideas, achieve the goals that your canned software can not cover and increase the value of your company.",
    content: (
      <>
        <p>Through the use of agile working methodology called SCRUM our team develop software that meets the requirements, desires and motivations of our customers. We focus our work on maximizing the experience of users who use the developments, generating high levels of acceptance and satisfaction.</p>
        <p>The working environment of knowledge companies is not similar to the one that gave rise to predictive project management. Strategies are now needed to launch products geared towards delivering tangible results early, and to the agile and flexible response needed to work in rapidly evolving markets.</p>
        <p>Today, the product is built at the same time as new requirements are modified and introduced. The client starts from a fairly clear vision, but the level of innovation required, and the speed at which the business environment moves, do not allow him to predict in detail how the final result will be.</p>
      </>
    ),
  },
  quote: "Agile project management is not formulated on the need for anticipation, but on the need for continuous adaptation.",
  principles: {
    title: "Agile Development Principles",
    subtitle: "The agile manifesto, establishes these 12 principles:",
    content: [
      "Customer satisfaction by early and continuous delivery of valuable software.",
      "Welcome changing requirements, even in late development.",
      "Working software is delivered frequently (weeks rather than months).",
      "Close, daily cooperation between business people and developers.",
      "Projects are built around motivated individuals, giving them the opportunity and support they need and giving them confidence to do the job.",
      "The most efficient and effective way to communicate information back and forth within a development team is through face-to-face conversation.",
      "Working software is the primary measure of progress.",
      "Agile processes promote sustainable development. Sponsors, developers and users must maintain a steady pace indefinitely.",
      "Continued attention to technical excellence enhances agility.",
      "Simplicity as an art of maximizing the amount of work that is not done is essential.",
      "The best architectures, requirements and designs emerge from self-organizing teams.",
      "Regularly, the team reflects on how to become more effective, and adjusts accordingly",
    ],
  },
}

export default function CustomizedSoftwareEn() {
  return <CustomizedSoftware {...TEXTS} />;
}

