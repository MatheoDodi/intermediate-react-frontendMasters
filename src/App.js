import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Terrier" }),
  //   React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "mixed" }),
  //   React.createElement(Pet, { name: "Jack", animal: "Dog", breed: "Husky" })
  // ]);
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
