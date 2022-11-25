const profileRouter = require('./src/routes/profiles');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dbConfig = require('./config');

const app = express();
const PORT = 2222;

async function connect() {
  try
  {
    await mongoose.connect(dbConfig["connectionString"], { useNewUrlParser: true, useUnifiedTopology: true });
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

// Allows you to verify via the browser that the server is up and running
app.get('/', (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
);

// Allows you to verify via the console that the server is up and running
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);