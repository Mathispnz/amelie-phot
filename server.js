const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const Admin = require('./models/Admin');

const app = express();
app.use(express.json());

// Cors to connect to both Client and Server
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000']
}));

// Connect to the database
const uri = 'mongodb://localhost:27017/gallery';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('MongoDB connected'))
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

// Port
const port = process.env.PORT || 5530;

app.listen(port, () => {
  console.log(`Server started on ${port}`)
});