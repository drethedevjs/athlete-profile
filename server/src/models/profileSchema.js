const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating db schema that defines how the data should look
const ProfileSchema = new Schema({
  firstName:{
    type: String,
    required: true
  },
  lastName:{
    type: String,
    required: true
  },
  sports: {
    type: Array,
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
  },
  location: {
    type: String,
    required: true,
    default: 'USA'
  },
  team: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: false,
  },
  interests: {
    type: Array,
    required: false
  },
  profileImage: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('Profile', ProfileSchema);