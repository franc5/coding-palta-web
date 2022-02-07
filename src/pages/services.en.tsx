import React from "react";
import { Link } from "gatsby";

import Item, { Service } from "../components/Item";
import OneTopicSection from "../components/OneTopicSection";

const SERVICES: Array<Service> = [{
  icon: "group",
  title: "Staff Augmentation",
  description: "We provide you with specific people for specific roles. Say, a developer to join your developer team. This is charged hourly (exactly, or as a fixed monthly rate contract)",
}, {
  icon: "access_time",
  title: "Time & Materials",
  description: "It's a form of staff augmentation where we responsable for the development but we work along with you or whoever else is involved in this project, for time. It can be a fixed amount of time, or indefinite. The scoping can be done similarly here, but it works more as if you would hire a development team for your company than simply hiring a company to develop an app. Everything is more simple and dynamic",
}, {
  icon: "attach_money",
  title: "Fixed Price",
  description: "A properly scoped project where we define a set of requirements starting from a deep analysis, we deliver an expected deadline, and we work on it until every party considers the requirements met. If the requirements change, everything is reevaluated. This is charged as a package",
}];

export default function ServicesPage() {
  return (
    <div className="container">
      <div className="section">

        {/* TODO: Add a paragraph explaining that we are a young company aiming to provide professional services to help startups grow faster */}
        <OneTopicSection
          title="Our Services"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus."
        />

        <div className="row">
          {SERVICES.map(service => <Item key={service.icon} {...service} />)}
        </div>

        <div className="row">
          <div className="col s12 center">
            <p className="light">
              Do you want to know more? <Link to="/contact">Let's get in touch</Link>.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
