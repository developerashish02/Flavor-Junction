import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("h1", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I am h1 Tag"), React.createElement("h1", {}, "i m h1 tag")]));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);