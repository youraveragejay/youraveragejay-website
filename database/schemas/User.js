const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  discordId: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  },
  accessToken: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  refreshToken: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
});

module.exports = mongoose.model("user", UserSchema);
