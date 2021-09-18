import React, { Component, useState } from "react";

import { get, post } from "../../utilities";

import "./FullWorkout.css";

class FullWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {
    get("api/singleWorkout", {title: "Runz for Funz"}).then((workout) => {
      this.setState({
        title: workout.title,
        description: workout.description,
        creator: workout.creator,
        time: workout.time,
        duration: workout.duration,
        workoutType: workout.workoutType,
        location: workout.location
      });
    });
  }

  render() {
    return (
      <>
        <p>Title: {this.state.title}</p>
        <p>Description: {this.state.description}</p>
        <p>Creator: {this.state.creator}</p>
        <p>People Attending: {this.state.people}</p>
        <p>Time: {this.state.time}</p>
        <p>Duration: {this.state.duration} hour(s)</p>
        <p>Workout Type: {this.state.workoutType}</p>
        <p>Location: {this.state.location}</p>
      </>
    );
}
}

export default FullWorkout;