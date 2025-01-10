import React from "react";
import ReactDOM from "react-dom/client";

const header = React.createElement("div", {}, [
  React.createElement("h1", {}, "This is h1 inside div"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);

