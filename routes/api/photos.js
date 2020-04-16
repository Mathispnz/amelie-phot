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

router.get('/:id', (req, res) => {
  Photo.findById(req.params.id)
  .then(photo => {
    res.status(200).json(photo)
  })
  .catch(err => {
    res.json(err)
  });
});

router.put('/:id', (req, res)=>{
  Photo.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({ message: `Photo with ${req.params.id} is updated successfully.` });
    })
    .catch(err => {
      res.json(err);
    })
})

router.delete('/:id', (req, res) => {
  Photo.findByIdAndRemove(req.params.id)
  .then(() => {
    res.json({ message: `Photo with ${req.params.id} is removed successfully.` });
  })
  .catch( err => {
    res.json(err);
  })
})

module.exports = router;