import * as React from "react";
import * as ReactDom from "react-dom";

import { Hello } from "./components/Hello";

import { ButtonHover } from "./components/ButtonHover";
import { ButtonHover2 } from "./components/ButtonHover2";
import { DirectionAwareHover } from "./components/DirectionAwareHover";

ReactDom.render(
  <div>
    <ButtonHover></ButtonHover>
    <ButtonHover2></ButtonHover2>
    <DirectionAwareHover></DirectionAwareHover>
  </div>,
  document.getElementById("root")
);
