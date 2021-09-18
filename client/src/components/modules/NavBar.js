import React, { Component } from "react";
import { Link } from "@reach/router";

import "./NavBar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <nav className="NavBar-background">
        <div className="NavBar-title">Login</div>
        <div className="NavBar-title">
          <Link to="/" className="NavBar-links">
            Home
          </Link>
        </div>
        <div className="NavBar-title">
          <Link to="/feed" className="NavBar-links">
            Feed
          </Link>
        </div>
        <div className="NavBar-title">
          <Link to="/mail" className="NavBar-links">
            Mailbox
          </Link>
        </div>
        <div className="NavBar-title">
          <Link to="/schedule" className="NavBar-links">
            Schedule
          </Link>
        </div>
        <div className="NavBar-title">
          <Link to="/create-workout" className="NavBar-links">
            Plan
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
