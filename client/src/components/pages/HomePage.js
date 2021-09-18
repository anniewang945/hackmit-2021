import React, { Component } from "react";
import NavBar from "../modules/NavBar.js";
import GoogleLogin, { GoogleLogout } from "react-google-login";

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
        <div>Lots to do here!</div>
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
