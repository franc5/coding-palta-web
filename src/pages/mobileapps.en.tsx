import React from "react";
import { Link } from "gatsby";

import * as _global from "../global";

import MobileAppsPage, { MobileAppsPageTexts } from "../components/MobileAppsPage";

const TEXTS: MobileAppsPageTexts = {
  mainSection: {
    title: "Mobile Apps Development",
    content: "We develop native and hybrid mobile applications, therefore we can adjust the development to the available budget and the project expectations.",
  },
  nativeAppsSection: {
    title: "Native Apps",
    content: (
      <>
        <p>
          A native application is the one developed specifically for a particular mobile operating system. Each of the platforms, Android and iOS, have a different system, so if you want your app to be available on all platforms, several apps have to be created with the language of the operating system selected.
        </p>
        <p>
          Native applications are usually more expensive and require more time to develop. As counterparts, there is the advantage of being able to use more efficiently all the features of the device hardware and the latest features of the operating system. The end result is an application with better performance and therefore with greater usability.
        </p>
      </>
    ),
  },
  hybridAppsSection: {
    title: "Hybrid Apps",
    content: (
      <>
        <p>
          Hybrid applications are developed with a common technology for all cellphones and reduce the development cost. Now, because the great technological improvement, the differences between native and hybrid applications are getting smaller.
        </p>
        <p>
          Depending on your needs, we can also develop your app as a web app with almost the same effort, turning hybrid apps a great alternative for almost every startup.
        </p>
      </>
    ),
  },
  contactLink: (
    <>
      Do you want to know more? <Link to="/contact">Let's get in touch</Link>.
    </>
  ),
}

export default function MobileAppsPageEn() {
  return <MobileAppsPage {...TEXTS} />;
}


