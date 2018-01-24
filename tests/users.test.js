const expect = require('expect');
const request = require('supertest');
const { token } = require('../headerAuth');
const app = require('../app');

describe('GET /users', () => {
  it('should get all users', () => {
    request(app)
      .get('/users')
      .set('Authorization', token)
      .expect(200)
      .expect(res => {
        expect(res.body.data.length).toBeGreaterThan(0);
      })
      .end();
  });
  it('should refuse request and return status 501', () => {
    request(app)
      .get('/users')
      .expect(501)
      .end();
  });
});

describe('GET /users/:id', () => {
  it('should get 1 user object', () => {
    request(app)
      .get('/users/5')
      .set('Authorization', token)
      .expect(200)
      .expect(res => {
        expect(res.body.data.name).toBeA('string');
        expect(res.body.data.username).toBeA('string');
        expect(res.body.data.website).toBeA('string');
      })
      .end();
  });
  it('should refuse request and return status 501', () => {
    request(app)
      .get('/users/5')
      .expect(501)
      .end();
  });
});

describe('POST /users', () => {
  it('should post object', () => {
    const bodyData = {
      name: 'foo',
      username: 'bar',
      website: 'foobaz.info',
    };
    request(app)
      .post('/users')
      .set('Authorization', token)
      .send(bodyData)
      .expect(200)
      .expect(res => {
        expect(res.body.data.name).toBe('foo');
        expect(res.body.data.username).toBe('foo');
        expect(res.body.data.website).toBe('foobaz.info');
      })
      .end();
  });
  it('should refuse request and return status 501', () => {
    const bodyData = {
      name: 'foo',
      username: 'bar',
      website: 'foobaz.info',
    };
    request(app)
      .post('/users')
      .send(bodyData)
      .expect(501)
      .end();
  });
});

describe('PUT /users/:id', () => {
  it('should update 1 object', () => {
    const bodyData = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    request(app)
      .put('/users/5')
      .set('Authorization', token)
      .send(bodyData)
      .expect(200)
      .expect(res => {
        expect(res.body.data.name).toBeA('string');
        expect(res.body.data.username).toBeA('string');
        expect(res.body.data.website).toBeA('string');
      })
      .end();
  });
  it('should refuse request and return status 501', () => {
    const bodyData = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    request(app)
      .put('/users/5')
      .send(bodyData)
      .expect(501)
      .end();
  });
});

describe('delete /users/:id', () => {
  it('should delete 1 user object', () => {
    request(app)
      .delete('/users/5')
      .set('Authorization', token)
      .expect(200)
      .end();
  });
  it('should refuse request and return status 501', () => {
    request(app)
      .put('/users/5')
      .expect(501)
      .end();
  });
});
