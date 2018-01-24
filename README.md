# BACK-END DEVELOPMENT TEST

Simple CRUD project using an online data source.

## Getting Started

It wasn't really clear wither the data for the POST and PUT requests should be hard coded or not so I made them hard coded simply to save time.

Keep in mind authorization through the header will be needed to use the APIs

### Prerequisites

What things you need to install

```
node.js
```

```
postman
```

### Installing

install dependencies

```
$ npm i
```

To run the server

```
$ npm run start
```

To run the server on watch mode

```
$ npm run mon
```

## Running the tests

### Testing with Mocha and expect

To run the tests

```
$ npm run test
```

To run the tests on watch mode

```
$ npm run test-watch
```

## APIs

### /posts

GET http://localhost:3000/posts
GET http://localhost:3000/posts/:id
POST http://localhost:3000/posts
PUT http://localhost:3000/posts/:id
DELETE http://localhost:3000/posts/:id

### /users

GET http://localhost:3000/users
GET http://localhost:3000/users/:id
POST http://localhost:3000/users
PUT http://localhost:3000/users/:id
DELETE http://localhost:3000/users/:id

### /albums

GET http://localhost:3000/albums
GET http://localhost:3000/albums/:id
POST http://localhost:3000/albums
PUT http://localhost:3000/albums/:id
DELETE http://localhost:3000/albums/:id

### /collections

GET http://localhost:3000/collections

## Author

* **Mohamed Hegab** - _Github link_ - [Khalil71](https://github.com/Khalil71)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
