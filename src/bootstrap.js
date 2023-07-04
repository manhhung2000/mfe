import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const mount = (el, options) => {
  const root = ReactDOM.createRoot(el);
  root.render(
    <React.StrictMode>
      <App {...options} />
    </React.StrictMode>
  );
};

const devRoot = document.querySelector("#root");
devRoot && mount(devRoot);

export { mount };
