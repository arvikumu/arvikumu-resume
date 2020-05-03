import React from "react";
import ReactDOM from "react-dom";
import { Font } from "@react-pdf/renderer";

import Resume from "./Resume";

Font.register({
  family: "Montserrat-Regular",
  src: "/Montserrat-Regular.ttf",
});

Font.register({
  family: "Montserrat-Medium",
  src: "/Montserrat-Medium.ttf",
});

Font.register({
  family: "Montserrat-SemiBold",
  src: "/Montserrat-SemiBold.ttf",
});

Font.register({
  family: "RobotoSlab-Regular",
  src: "/RobotoSlab-Regular.ttf",
});

Font.register({
  family: "RobotoSlab-Medium",
  src: "/RobotoSlab-Medium.ttf",
});

ReactDOM.render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>,
  document.getElementById("root")
);
