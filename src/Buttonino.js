import React from "react";
import { styleWrapper } from "./StyleWrapper/StyleWrapper";

const basicElement = props => <h1 {...props}>{props.children}</h1>;

export const Buttonino = styleWrapper(
  basicElement,
  props => `color: ${props.color};`
);
