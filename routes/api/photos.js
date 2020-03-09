const express = require('express');
const router = express.Router();

const Photo = require('../../models/Photos');

router.get('/', (req, res) => {
  
  Photo.find()
  .then(photos => res.json(photos))
})

router.post('/add', (req, res) => {

  Photo.create(req.body)
  .then(newPhoto => {
    res.status(200).json(newPhoto);
  })
  .catch(err => {
    console.log(err)
  });
})

module.exports = router;