import "./App.css";
import React from "react";
import munchLogo from "./munch-logo.png";
import { List } from "./List";
// import { Map } from "./Map";

const App = () => {
  return (
    <div className="app">
      <img className="app-header w-75 m-3" src={munchLogo} alt="Munch" />
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            List
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Map</a>
        </li>
      </ul>
      <List />
      {/* <Map /> */}
    </div>
  );
};

export default App;
