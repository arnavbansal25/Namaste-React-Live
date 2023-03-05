import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = <h1 key="1">heading 1</h1>;

const H2 = () => <h2 key="2">heading 2</h2>;

const Container = () => (
  <div id="container">
    {heading1}
    <H2 />
    <H2></H2>
    {H2()}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);
