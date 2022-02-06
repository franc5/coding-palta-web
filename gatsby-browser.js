import React from "react";

import Layout from "./src/layouts";

export const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>;

