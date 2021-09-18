import React, { Component } from "react";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <div>Login</div>
        <div>Feed</div>
        <div>Mailbox</div>
        <div>Schedule</div>
      </nav>
    );
  }
}
