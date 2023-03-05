import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = <h1 key="1">heading 1</h1>;
const heading2 = <h2 key="2">heading 2</h2>;

const container = (
  <div id="container">
    {heading1} {heading2}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
