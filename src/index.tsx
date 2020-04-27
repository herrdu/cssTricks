import * as React from "react";
import * as ReactDom from "react-dom";

import { Hello } from "./components/Hello";

import { ButtonHover } from "./components/ButtonHover";
import { ButtonHover2 } from "./components/ButtonHover2";

ReactDom.render(
  <div>
    <ButtonHover></ButtonHover>
    <ButtonHover2></ButtonHover2>
  </div>,
  document.getElementById("root")
);
