const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const { token } = require('../headerAuth');
const { status, json } = require('./functions');

router.get('/', (req, res) => {
  const url = `https://jsonplaceholder.typicode.com/albums`;
  req.checkHeaders('Authorization', 'no authorization').equals(token);

  let errors = req.validationErrors();
  if (errors) {
    return res.status(501).send('no auth');
  }
  fetch(url, {})
    .then(status)
    .then(json)
    .then(function(data) {
      res.send(data);
    })
    .catch(function(error) {
      res.send(error);
    });
});

router.get('/:id', (req, res) => {
  const url = `https://jsonplaceholder.typicode.com/albums/${req.params.id}`;
  req.checkHeaders('Authorization', 'no authorization').equals(token);

  let errors = req.validationErrors();
  if (errors) {
    return res.status(501).send('no auth');
  }
  fetch(url)
    .then(status)
    .then(json)
    .then(function(data) {
      res.send(data);
    })
    .catch(function(error) {
      res.send(error);
    });
});

router.post('/', (req, res) => {
  const url = `https://jsonplaceholder.typicode.com/albums/`;
  req.checkHeaders('Authorization', 'no authorization').equals(token);

  let errors = req.validationErrors();
  if (errors) {
    return res.status(501).send('no auth');
  }
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      userId: 7,
      title: 'boo baz bar',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(json)
    .then(function(data) {
      res.send(data);
    })
    .catch(function(error) {
      res.send(error);
    });
});

router.put('/:id', (req, res) => {
  const url = `https://jsonplaceholder.typicode.com/albums/${req.params.id}`;
  req.checkHeaders('Authorization', 'no authorization').equals(token);

  let errors = req.validationErrors();
  if (errors) {
    return res.status(501).send('no auth');
  }
  fetch(url, {
    method: 'PUT',
    body: JSON.stringify({
      userId: 7,
      title: 'foo baz boo',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(json)
    .then(function(data) {
      res.send(data);
    })
    .catch(function(error) {
      res.send(error);
    });
});

router.delete('/:id', (req, res) => {
  const url = `https://jsonplaceholder.typicode.com/albums/${req.params.id}`;
  req.checkHeaders('Authorization', 'no authorization').equals(token);

  let errors = req.validationErrors();
  if (errors) {
    return res.status(501).send('no auth');
  }
  fetch(url, {
    method: 'DELETE',
  })
    .then(function(data) {
      res.send('Success');
    })
    .catch(function(error) {
      res.send(error);
    });
});

module.exports = router;
