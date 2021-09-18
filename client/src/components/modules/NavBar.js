import React, { Component } from "react";

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
        <div className="NavBar-title">Feed</div>
        <div className="NavBar-title">Mailbox</div>
        <div className="NavBar-title">Schedule</div>
      </nav>
    );
  }
}

export default NavBar;
