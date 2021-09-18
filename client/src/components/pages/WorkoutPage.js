import React, { Component, useState } from "react";
import NavBar from "../modules/NavBar.js";
import FullWorkout from "../modules/FullWorkout.js";

import { get, post } from "../../utilities";

import "./WorkoutPage.css";

class WorkoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    }
  }

  render() {
    return (
      <>
        <NavBar/>
        {/* assume that we are getting the right props */}
        <FullWorkout workout={this.props.workout}/>
        {/* TODO: display the workout info here */}
        <div className="WorkoutPage-label"> People to Invite: </div>
        {/* TODO: add all users here */}
        <div> TODO: Insert user list here </div>
      </>
    );
}
}

export default WorkoutPage;