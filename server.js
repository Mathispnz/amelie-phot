require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();
app.use(express.json());

// Cors to connect to both Client and Server
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000']
}));

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://ameliepeingnezphotography.herokuapp.com');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// Connect to the database
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
.catch(err => console.log(err));

// Passport
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  Admin.findById(id, function(err, user) {
      done(err, user);
  });
});

passport.use(new LocalStrategy((username, password, next) => {
    Admin.findOne({ username }, (err, foundUser) => {
      if (err) {
        next(err);
        return;
      }
  
      if (!foundUser) {
        next(null, false, { message: 'Incorrect username.' });
        return;
      }
  
      next(null, foundUser);
    });
}))

app.use(session({
  secret: 'secret key',
  resave: true,
  saveUninitialized: true
}))

// Passport authentication
app.use(passport.initialize());
app.use(passport.session());

// Routes
const photos = require('./routes/api/photos');

app.use('/api/photos', photos);
app.use('/api/photos', require('./routes/api/file-upload-routes'));
app.use('/api/auth', require('./routes/api/admin'));

// app.use((req, res, next) => {
//   // If no routes match, send them the React HTML.
//   res.sendFile(__dirname + '/public/index.html');
// });


if (process.env.NODE_ENV === "production") {
  const root = require('path').join(__dirname, 'public');
  app.use(express.static(root));
  app.get("*", (req, res) => {
      res.sendFile('index.html', { root });
  });
}

const root = require('path').join(__dirname, 'public');
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
});

// Port
const port = process.env.PORT || 5530;

app.listen(port, () => {
  console.log(`Server started on ${port}`)
});

module.exports = app;