const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Profile = require('../models/profileSchema');

router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', (req, res) => {
  Profile.find({name: req.params.name}, (err, profile) => {
    if(err) {
      res.send(err);
    }

    // Adding the retrieved information from the db to the json object being returned
    res.json(profile);
  });
});

router.post('/', async (req, res) => {
  const profile = new Profile({
    name: req.body.name,
    sport: req.body.sport,
    gender: req.body.gender,
    dateOfBirth: req.body.dateOfBirth,
  });
  
  try {
    await profile.save();
    res.status(201).json(profile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
})

module.exports = router;