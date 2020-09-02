const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');

require('dotenv').config();

const users = require('./routes/api/users');

// Configures so we can have our env variables in .env

// Create the express server + the port it will run on
const app = express();
const port = process.env.PORT || 4000; // process.env.port is Heroku's port if you choose to deploy the app there

// Middleware
app.use(cors());
app.use(express.json()); // Allows us to parse json

// Connect to the db
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDB database connection established successfully');
});

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

// const usersRouter = require('./routes/api/users');
// const usersRouter = require('./routes/users');
//
// app.use('/users', usersRouter);
// app.use('/users', usersRouter);

// Start server
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
