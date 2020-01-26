const express = require('express');
const router = express.Router();

const Photo = require('../../models/Photos');

router.get('/', (req, res) => {
  Photo.find()
  .then(photos => res.json(photos))
})

router.post('/add', (req, res) => {
  Photo.find()
  .then(photos => res.json(photos))
})

module.exports = router;