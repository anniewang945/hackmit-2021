import React, { Component, useState } from "react";
import NavBar from "../modules/NavBar.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { get, post } from "../../utilities";

import "./CreateWorkoutPage.css";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            type: "",
            time: new Date(), // default: current date
            duration: 1, // default: 1 hour 
            location: "",
            people: [], // includes creator
        }
    }

    handleTitleChange = (event) => {
        this.setState({ title: event.target.value });
    }

    handleDescriptionChange = (event) => {
        this.setState({ description: event.target.value });
    }

    handleTypeChange = (event) => {
        this.setState({ type: event.target.value });
    }

    handleTimeChange = (event) => {
        this.setState({ time: event });
    }

    handleDurationChange = (event) => {
        this.setState({ duration: Number(event.target.value) });
    }

    handleLocationChange = (event) => {
        this.setState({ location: event.target.value });
    }

    handleSubmit = (event) => {
        // TODO: post workout, route to schedule page, remove console log
        event.preventDefault();
        post("api/workout", {creator: "TO DO", 
                            title: this.state.title, 
                            description: this.state.description, 
                            people: this.state.people,
                            time: this.state.time.toDateString(),
                            duration: this.state.duration,
                            workoutType: this.state.workoutType,
                            location: this.state.location
        });
        console.log(this.state);
    }

    render() {
        return (
            <>
                <NavBar />
                <div className="CreateWorkoutPage-container">
                    <div className="CreateWorkoutPage-title"> Create A Workout </div>
                    <br />
                    <form>
                        <div className="CreateWorkoutPage-label"> Title*: </div>
                        <input type="text" name="name" onChange={this.handleTitleChange} required />

                        <div className="CreateWorkoutPage-label"> Description: </div>
                        <textarea name="description" onChange={this.handleDescriptionChange} />

                        <div className="CreateWorkoutPage-label"> Workout Type: </div>
                        <input type="text" name="workout-type" onChange={this.handleTypeChange} />

                        <div className="CreateWorkoutPage-label"> Time*: </div>
                        <DatePicker showTimeSelect selected={this.state.time} onChange={this.handleTimeChange} dateFormat="MMM d, yyyy h:mm aa" />

                        <div className="CreateWorkoutPage-label"> Duration* (hours): </div>
                        <input type="text" name="duration" onChange={this.handleDurationChange} required />

                        <div className="CreateWorkoutPage-label"> Location: </div>
                        <input type="text" name="location" onChange={this.handleLocationChange} />

                        <div className="CreateWorkoutPage-label"> People to Invite: </div>
                        {/* TODO: add all users here */}
                        <div> TODO: Insert user list here </div>

                        <br />
                        <input type="submit" onSubmit={this.handleSubmit} />
                    </form>
                </div>
            </>

        );
    }
}

export default Home;


