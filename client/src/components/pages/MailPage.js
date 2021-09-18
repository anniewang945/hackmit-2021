import React, { Component } from "react";
import { Link } from "@reach/router";

import NavBar from "../modules/NavBar.js";

import "../../utilities.css";
import "./Skeleton.css";

class MailPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <>
        <section>
          <NavBar />
        </section>
        <div>this is the mailbox</div>
      </>
    );
  }
}

export default MailPage;
