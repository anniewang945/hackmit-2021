import React, { Component } from "react";

import "./CreateWorkout.css";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            workoutType: "",
        }
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    }

    handleDescriptionChange = (event) => {
        this.setState({ description: event.target.value });
    }

    handleWorkoutTypeChange = (event) => {
        this.setState({ workoutType: event.target.value });
    }

    render() {
        return (
            <div className="CreateWorkout-container">
                <div className = "CreateWorkout-title"> Create A Workout </div>
                <br />
                <form>
                    <div className="CreateWorkout-label"> Name: </div>
                    <input type="text" name="name" onChange={this.handleNameChange}/>
                    <div className="CreateWorkout-label"> Description: </div>
                    <textarea name="description" onChange={this.handleDescriptionChange}/>
                    <div className="CreateWorkout-label"> Workout Type: </div>
                    <input type="text" name="workout-type" onChange={this.handleWorkoutTypeChange}/>
                    <div className="CreateWorkout-label"> Time: </div>
                    <div className="CreateWorkout-label"> Location: </div>
                    <div className="CreateWorkout-label"> People to Invite: </div>

                </form>
            </div>
        );
    }
}

export default Home;


