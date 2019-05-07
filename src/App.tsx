import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import Secured from "./components/Secured";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <ul>
          <li>
            <Link to="/">public component</Link>
          </li>
          <li>
            <Link to="/secured">secured component</Link>
          </li>
        </ul>
        <Route exact path="/" component={Welcome} />
        <Route path="/secured" component={Secured} />
      </div>
    </BrowserRouter>
  );
};

export default App;
