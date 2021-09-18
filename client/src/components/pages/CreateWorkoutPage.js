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
        post("api/workout", {
            creator: "TO DO",
            title: this.state.title,
            description: this.state.description,
            people: this.state.people,
            time: this.state.time.toDateString(),
            duration: this.state.duration,
            workoutType: this.state.type,
            location: this.state.location
        });
    }

    render() {
        return (
            <>
                <NavBar />
                <div className="CreateWorkoutPage-container">
                    <div className="CreateWorkoutPage-title"> Create A Workout </div>
                    <br />
                    <form onSubmit={this.handleSubmit}>
                        <div className="CreateWorkoutPage-label"> Title*: </div>
                        <input type="text" name="title" onChange={this.handleTitleChange} required />

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
                        {this.props.allUsers.map(user => (
                            <div key={`allUsers${user._id}`}> {user.name} </div>
                        ))}
                        
                        <br />
                        <input type="submit" />
                    </form>
                </div>
            </>

        );
    }
}

export default Home;


