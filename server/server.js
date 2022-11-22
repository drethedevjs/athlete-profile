const profileRouter = require('./src/routes/profiles');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 2222;

const uri = 'mongodb+srv://sa:<password>@athlete-profile-cluster.msgfrq8.mongodb.net/?retryWrites=true&w=majority';

async function connect() {
  try
  {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to database!");
  } catch (error) {
    console.log(error);
  }
}

connect();
app.use(express.json());
app.use(cors);
app.use('/profile', profileRouter);

// Allows you to verify via the browser that the server is up and running
app.get('/', (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
);

// Allows you to verify via the console that the server is up and running
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);