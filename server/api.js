/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");
const Workout = require("./models/workout");
const Invite = require("./models/invite");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user) socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

// user requests below
// get all users in the database
router.get("/allUsers", (req, res) => {
  User.find({}).then((users) => res.send(users));
})

// workout requests below
// post a workout
router.post("/workout", (req, res) => {
  const newWorkout = new Workout({
    creator: req.body.creator,
    title: req.body.title,
    description: req.body.description, 
    people: req.body.people,
    time: req.body.time,
    duration: req.body.duration,
    workoutType: req.body.workoutType,
    location: req.body.location,
  });
  console.log(req);
  newWorkout.save().then((workout) => res.send(workout));
});

// get a single workout by title
router.get("/singleWorkout", (req, res) => {
  Workout.findOne({ title: req.query.title }).then((workout) => res.send(workout));
});

// get all workouts of a user
router.get("/userWorkouts", (req, res) => {
  Workout.find({ creator: req.query.user }).then((workouts) => res.send(workouts));
});

// get all workouts in the database
router.get("/allWorkouts", (req, res) => {
  Workout.find({}).then((workouts) => res.send(workouts));
});

// invite requests below
// post an invite
router.post("/invite", (req, res) => {
  const newInvite = new Invite({
    to: req.body.to,
    from: req.body.from,
    workout: req.body.workout,
  });
  newInvite.save().then((invite) => res.send(invite));
});

// get an invite by id
router.get("/inviteById", (req, res) => {
  Invite.find({ _id: req.query._id }).then((invite) => res.send(invite));
});

// get all invites sent by a user
router.get("/userSentInvites", (req, res) => {
  Invite.find({ from: req.query.user }).then((invites) => res.send(invites));
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
