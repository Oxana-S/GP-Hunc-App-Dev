"use client";

import React from "react";
import ReactDOM from "react-dom";

interface IProps {
  className?: string;
  el?: string;
  parent?: HTMLElement;
}

const Portal: React.FC<React.PropsWithChildren<IProps>> = ({
  children,
  parent = document?.body,
}) => {
 
  return ReactDOM.createPortal(children, parent);
};

export default Portal;
