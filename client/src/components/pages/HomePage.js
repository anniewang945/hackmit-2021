import React, { Component } from "react";
import NavBar from "../modules/NavBar.js";

import "../../utilities.css";
import "./Skeleton.css";

class HomePage extends Component {
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
        <div>Lots to do here!</div>
      </>
    );
  }
}

export default HomePage;
