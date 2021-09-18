import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import HomePage from "./pages/HomePage.js";
import FeedPage from "./pages/FeedPage.js";
import MailPage from "./pages/MailPage.js";
import SchedulePage from "./pages/SchedulePage.js";
import CreateWorkoutPage from "./pages/CreateWorkoutPage.js"

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      userId: undefined,
      allUsers: [],
    };
  }

  componentDidMount() {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        this.setState({ userId: user._id });
      }
    }).then(
      get("/api/allUsers").then((users) => {
        this.setState({ allUsers: users.filter(user => user._id != this.state.userId) });
      })
    );
  }

  handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      this.setState({ userId: user._id });
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  handleLogout = () => {
    this.setState({ userId: undefined });
    post("/api/logout");
  };

  render() {
    return (
      <>
        <Router>
          <Skeleton
            path="/a"
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            userId={this.state.userId}
          />
          <HomePage 
            path="/" userId={this.state.userId}
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
          />
          <FeedPage path="/feed" userId={this.state.userID} />
          <MailPage path="/mail" userId={this.state.userID} />
          <SchedulePage path="/schedule" userId={this.state.userID} />
          <CreateWorkoutPage path="/create-workout" userId={this.state.userId} allUsers={this.state.allUsers} />
          <NotFound default />
        </Router>
      </>
    );
  }
}

export default App;
