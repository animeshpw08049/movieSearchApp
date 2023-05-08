import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  return (
    <div className="navDiv">
      <h1 className="h1tag">
        Movie <span className="spanTag">Search App</span>
      </h1>
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
