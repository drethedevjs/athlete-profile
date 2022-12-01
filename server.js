require('dotenv').config();
const profileRouter = require('./src/routes/profiles');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

async function connect() {
  try
  {
    await mongoose.connect(process.env.MONGODB_URL || '', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to database!");
  } catch (error) {
    console.log(error);
  }
}

connect();

app.use(express.json());
app.use('/profile', profileRouter);

const corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}

app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname + '/app')));
app.use("/", function(req, res) {
  res.sendFile(path.join(__dirname + '/app/pages/index.html'));
});

// Allows you to verify via the console that the server is up and running
const PORT = process.env.PORT || 2222;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));