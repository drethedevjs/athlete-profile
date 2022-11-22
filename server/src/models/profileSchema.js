const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating db schema that defines how the data should look
const ProfileSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  sport: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Profile', ProfileSchema);