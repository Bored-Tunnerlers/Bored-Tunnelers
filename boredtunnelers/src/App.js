import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import logo from "./logo.svg";
import "./App.css";

// Custom Components
import Team from "./components/team/Team";

function App() {
  return (
    <React.Fragment>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div> */}

      <Team />
    </React.Fragment>
  );
}

export default App;
