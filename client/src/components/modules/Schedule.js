import React, { Component } from "react";
import { Link } from "@reach/router";

import Paper from "@material-ui/core/Paper";
import { Scheduler, WeekView, Appointments } from "@devexpress/dx-react-scheduler-material-ui";

import appointments from "./demo-data/today-appointments.js";

import "./Schedule.css";

class Schedule extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <Paper>
        <Scheduler data={appointments} height={660}>
          <WeekView startDayHour={9} endDayHour={19} />
          <Appointments />
        </Scheduler>
      </Paper>
    );
  }
}

export default Schedule;
