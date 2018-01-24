var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();
var { token } = require('../headerAuth');

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function json(response) {
  return response.json();
}

router.get('/', (req, res) => {
  const url = `https://jsonplaceholder.typicode.com/users`;
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
  const url = `https://jsonplaceholder.typicode.com/users/${req.params.id}`;
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
  const url = `https://jsonplaceholder.typicode.com/users/`;
  req.checkHeaders('Authorization', 'no authorization').equals(token);

  let errors = req.validationErrors();
  if (errors) {
    return res.status(501).send('no auth');
  }
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: 7,
      name: 'foo',
      username: 'baz',
      email: 'foo@baz.com',
      address: {
        street: 'foo street',
        suite: 'Apt. bar',
        city: 'foobazBar',
      },
      phone: '123-569-7895',
      website: 'www.fooBaz.co',
      company: {
        name: 'baz corp',
        catchPhrase: ' foo bar baz boo',
        bs: 'bar bar bar',
      },
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
  const url = `https://jsonplaceholder.typicode.com/users/${req.params.id}`;
  req.checkHeaders('Authorization', 'no authorization').equals(token);

  let errors = req.validationErrors();
  if (errors) {
    return res.status(501).send('no auth');
  }
  fetch(url, {
    method: 'PUT',
    body: JSON.stringify({
      user: 7,
      name: 'boo',
      username: 'bar',
      email: 'bar@baz.com',
      address: {
        street: 'foo street',
        suite: 'Apt. bar',
        city: 'foobazBar',
      },
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
  const url = `https://jsonplaceholder.typicode.com/users/${req.params.id}`;
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
