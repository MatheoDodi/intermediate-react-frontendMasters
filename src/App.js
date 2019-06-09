import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Terrier" }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "mixed" }),
    React.createElement(Pet, { name: "Jack", animal: "Dog", breed: "Husky" })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
