import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Terrier" }),
  //   React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "mixed" }),
  //   React.createElement(Pet, { name: "Jack", animal: "Dog", breed: "Husky" })
  // ]);
  return (
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
