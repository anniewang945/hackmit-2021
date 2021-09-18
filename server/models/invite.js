const mongoose = require("mongoose");

const InviteSchema = new mongoose.Schema({
  to: String, // TODO: can change to Array to send multiple invites at once
  from: String,
  workout: Object, // if this doesn't work change to string
});

module.exports = mongoose.model("user", InviteSchema);
