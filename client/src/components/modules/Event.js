import React, { Component } from "react";
import { Link } from "@reach/router";

import "./Event.css";

class Event extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <div className="Event-background">
        <div>{this.props.name}</div>
        <div>{this.props.date}</div>
        <div>{this.props.time}</div>
        <div>With: {this.props.with}</div>
      </div>
    );
  }
}

export default Event;
