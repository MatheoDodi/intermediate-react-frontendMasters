import React, { useState } from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import SearchParams from './SearchParams';
import Details from './Details';
import ThemeContext from './ThemeContext';
import NavBar from './Navbar';

const App = () => {
  const themeHook = useState('darkblue');
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Terrier" }),
  //   React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "mixed" }),
  //   React.createElement(Pet, { name: "Jack", animal: "Dog", breed: "Husky" })
  // ]);
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <NavBar />
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById('root'));
