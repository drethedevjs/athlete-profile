const profileRouter = require('./src/routes/profiles');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 2222;

// Mongoose Connection: To connect to the database
// mongoose.Promise = global.Promise;
const uri = 'mongodb+srv://sa:&f7cRLQN9mbz^e2*Nc56@athlete-profile-cluster.msgfrq8.mongodb.net/?retryWrites=true&w=majority';

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
app.use('/profile', profileRouter);

// Setting up body parser in order for the payloads to be usable with/readable by the api
// app.use(bodyParser.urlencoded({ extended: true })) // parses the bodies of the http requests
// app.use(bodyParser.json()); // parses json objects and adds information to the body property of the request obj

// Allows you to verify via the browser that the server is up and running
app.get('/', (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
);

// Allows you to verify via the console that the server is up and running
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);