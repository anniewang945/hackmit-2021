import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import NavBar from "../modules/NavBar.js";
import Schedule from "../modules/Schedule.js";
import Event from "../modules/Event.js";

import "../../utilities.css";
import "./Skeleton.css";

const GOOGLE_CLIENT_ID = "768117289293-7f5hjm2agb39e37sdc0srlu73i9tnq0e.apps.googleusercontent.com";

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
        <section>
          <Event name="Running" date="Sep. 18" time="12:00 PM" with="Feina" />
          <Event name="Swimming" date="Sep. 19" time="1:00 AM" with="Eliz" />
          <Event name="Cycling" date="Sep. 19" time="3:00 AM" with="Myself" />
        </section>
        <section>
          <Schedule />
        </section>
        <div>
          {this.props.userId ? (
            <GoogleLogout
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Logout"
              onLogoutSuccess={this.props.handleLogout}
              onFailure={(err) => console.log(err)}
            />
          ) : (
            <GoogleLogin
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Login"
              onSuccess={this.props.handleLogin}
              onFailure={(err) => console.log(err)}
            />
          )}
        </div>
      </>
    );
  }
}

export default HomePage;
