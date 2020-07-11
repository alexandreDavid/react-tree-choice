import React from "react";

import { ThemeProvider } from "@chakra-ui/core";
import { theme } from "@chakra-ui/core";

import { MyComponent } from "../index";

export default { title: "Exercise Component" };

// If you don't want to use Chakra, simply uncomment the following story,
// and comment the one after.

// export const Basic = () => <MyComponent />;

const reportConfig = {
  "enabled": true,
  "children": {
    "coverPage": { "enabled": true },
    "summary": { "enabled": true },
    "anomalyDefinitions": { "enabled": true },
    "missionReport": {
      "enabled": true,
      "children": {
        "missionDescription": { "enabled": true },
        "missionCustomerInfo": { "enabled": true }
      }
    }
  }
 } 

export const Basic = () => (
  <ThemeProvider theme={theme}>
    <MyComponent reportConfig={reportConfig} />
  </ThemeProvider>
);
