const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const photos = require('./routes/api/photos');

const app = express();

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000']
}));

// mathispnz M4kel0ve

const uri = 'mongodb://localhost:27017/gallery';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/photos', photos);

const port = process.env.PORT || 5530;

app.listen(port, () => {
  console.log(`Server started on ${port}`)
});