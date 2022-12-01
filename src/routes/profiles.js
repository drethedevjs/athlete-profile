const express = require('express');
const router = express.Router();
const Profile = require('../models/profileSchema');

router.get('/', async (req, res) => {
  setResponseHeader(res);
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', (req, res) => {
  setResponseHeader(res);
  Profile.find({_id: req.params.id}, (err, profile) => {
    if(err) {
      res.send(err.message);
    }

    // Adding the retrieved information from the db to the json object being returned
    res.json(profile);
  });
});

router.post('/', async (req, res) => {
  setResponseHeader(res);
  const profile = new Profile({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    sports: req.body.sports,
    gender: req.body.gender,
    dateOfBirth: req.body.dateOfBirth,
    team: req.body.team,
    about: req.body.about,
    interests: req.body.interests,
    profileImage: req.body.profileImage,
    location: req.body.location,
  });

  try {
    await profile.save();
    res.status(201).json(profile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
})

router.put('/', async (req, res) => {
  setResponseHeader(res);
  const profile = new Profile({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    sports: req.body.sports,
    gender: req.body.gender,
    dateOfBirth: req.body.dateOfBirth,
    team: req.body.team,
    about: req.body.about,
    interests: req.body.interests,
    profileImage: req.body.profileImage,
    location: req.body.location,
  });

  try {
    await Profile.updateOne({ id: req.body.id }, profile);
    res.status(201).json(profile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
})

router.delete('/remove/:id', async (req, res) => {
  setResponseHeader(res);

  try {
    var y = await Profile.findOneAndDelete(req.params.id);
    res.status(200);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
})

const setResponseHeader = (res) => res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5555');

module.exports = router;