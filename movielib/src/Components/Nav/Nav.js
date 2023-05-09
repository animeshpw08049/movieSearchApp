import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  return (
    <div className="navDiv">
      <Link className="heads" to="/">
        <h1 className="h1tag">
          Movie <span className="spanTag">Search App</span>
        </h1>
      </Link>
      <div className="linkDiv">
        <Link to="/"></Link>
        <Link className="linked" to="/movielibrary">
          Movie Library
        </Link>
      </div>
    </div>
  );
}

export default Nav;
