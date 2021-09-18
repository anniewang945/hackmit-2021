import React, { Component, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


import "./CreateWorkout.css";

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
        this.setState({ duration: Number(event.target.value)});
    }

    handleLocationChange = (event) => {
        this.setState({ location: event.target.value });
    }

    handleSubmit = (event) => {
        // TODO: post workout, route to schedule page
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="CreateWorkout-container">
                <div className = "CreateWorkout-title"> Create A Workout </div>
                <br />
                <form>
                    <div className="CreateWorkout-label"> Title: </div>
                    <input type="text" name="name" onChange={this.handleTitleChange}/>

                    <div className="CreateWorkout-label"> Description: </div>
                    <textarea name="description" onChange={this.handleDescriptionChange}/>

                    <div className="CreateWorkout-label"> Workout Type: </div>
                    <input type="text" name="workout-type" onChange={this.handleTypeChange}/>

                    <div className="CreateWorkout-label"> Time: </div>
                    <DatePicker showTimeSelect selected={this.state.time} onChange={this.handleTimeChange} dateFormat="MMM d, yyyy h:mm aa"/>
                    
                    <div className="CreateWorkout-label"> Duration (hours): </div>
                    <input type="text" name="duration" onChange={this.handleDurationChange}/>

                    <div className="CreateWorkout-label"> Location: </div>
                    <input type="text" name="location" onChange={this.handleLocationChange}/>

                    <div className="CreateWorkout-label"> People to Invite: </div>
                    {/* TODO: add all users here */}
                    <div> TODO: Insert user list here </div>

                    <br />
                    <button onClick={this.handleSubmit}> Create </button>
                </form>
            </div>
        );
    }
}

export default Home;


