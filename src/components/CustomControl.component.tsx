import { createControlComponent } from "@react-leaflet/core";

import L from "leaflet";
import React from "react";
import { createRoot } from "react-dom/client";

interface MyControlOptions extends L.ControlOptions {
  component?: React.ElementType;
}

class MyControl extends L.Control {
  component?: React.ElementType;

  constructor(options?: MyControlOptions) {
    super(options);
    this.component = options?.component;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onAdd(map: L.Map): HTMLElement {
    const controlContainer = L.DomUtil.create("div", "custom-control");

    if (this.component) {
      const root = createRoot(controlContainer);
      root.render(React.createElement(this.component));
    }
    // Stop dblclick events from propagating
    controlContainer.addEventListener("dblclick", (event) => {
      event.stopPropagation();
    });
    // Stop wheel events from propagating
    controlContainer.addEventListener("wheel", (event) => {
      event.stopPropagation();
    });
    return controlContainer;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createCustomControl = (props: any) => {
  const controlInstance = new MyControl(props);
  controlInstance.component = props.component; // Store the component in the control instance
  return controlInstance;
};

export const CustomControl = createControlComponent(createCustomControl);
