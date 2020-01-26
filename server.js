const express = require('express');
const mongoose = require('mongoose');

const photos = require('./routes/api/photos');

const app = express();

app.use(express.json());

// mathispnz M4kel0ve

const uri = 'mongodb+srv://mathispnz:mathismathis@cluster0-wji65.mongodb.net/test';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/photos', photos);

const port = process.env.PORT || 5530;

app.listen(port, () => {
  console.log(`Server started on ${port}`)
});