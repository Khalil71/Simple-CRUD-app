const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const { token } = require('../headerAuth');
const { status, json } = require('../functions');

const urls = [
  `https://jsonplaceholder.typicode.com/posts`,
  `https://jsonplaceholder.typicode.com/users`,
  `https://jsonplaceholder.typicode.com/albums`,
];

let collectionData = [];
router.get('/', (req, res) => {
  req.checkHeaders('Authorization', 'no authorization').equals(token);

  let errors = req.validationErrors();
  if (errors) {
    return res.status(501).send('no auth');
  }
  for (let i = 0; i < urls.length; i++) {
    fetch(urls[i])
      .then(status)
      .then(json)
      .then(function(data) {
        collectionData[i] = data.slice(0, 30);
        // console.log(data);
      })
      .catch(function(error) {
        res.send(error);
      });
  }
  res.status(200).send(collectionData);
});

module.exports = router;
