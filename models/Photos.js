const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  name: {
    type: String
  },
  color: {
    type: String
  },
  url: {
    type: String
  },
  location: {
    type: String
  },
  description: {
    type: String
  },
  theme: {
    type: String
  }
});

module.exports = Photo = mongoose.model('photo', photoSchema);