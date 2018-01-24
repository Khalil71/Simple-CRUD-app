const expect = require('expect');
const request = require('supertest');
const { token } = require('../headerAuth');
const app = require('../app');

describe('GET /posts', () => {
  it('should get all posts', () => {
    request(app)
      .get('/posts')
      .set('Authorization', token)
      .expect(200)
      .expect(res => {
        expect(res.body.data.length).toBeGreaterThan(0);
      })
      .end();
  });
  it('should refuse request and return status 501', () => {
    request(app)
      .get('/posts')
      .expect(501)
      .end();
  });
});

describe('GET /posts/:id', () => {
  it('should get 1 post object', () => {
    request(app)
      .get('/posts')
      .set('Authorization', token)
      .expect(200)
      .expect(res => {
        expect(res.body.data.userId).toBe(1);
        expect(res.body.data.id).toBe(5);
        expect(res.body.data.title).toBeA('string');
        expect(res.body.data.body).toBeA('string');
      })
      .end();
  });
  it('should refuse request and return status 501', () => {
    request(app)
      .get('/posts')
      .expect(501)
      .end();
  });
});

describe('POST /posts', () => {
  it('should post 1 post object', () => {
    const bodyData = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    request(app)
      .post('/posts')
      .set('Authorization', token)
      .send(bodyData)
      .expect(200)
      .expect(res => {
        expect(res.body.data.userId).toBe(1);
        expect(res.body.data.id).toBe(101);
        expect(res.body.data.title).toBeA('string');
        expect(res.body.body).toBeA('string');
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
      .post('/posts')
      .send(bodyData)
      .expect(501)
      .end();
  });
});

describe('PUT /posts/:id', () => {
  it('should update 1 post object', () => {
    const bodyData = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    request(app)
      .put('/posts/5')
      .set('Authorization', token)
      .send(bodyData)
      .expect(200)
      .expect(res => {
        expect(res.body.data.userId).toBe(1);
        expect(res.body.data.id).toBe(101);
        expect(res.body.data.title).toBeA('string');
        expect(res.body.body).toBeA('string');
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
      .put('/posts/5')
      .send(bodyData)
      .expect(501)
      .end();
  });
});

describe('delete /posts/:id', () => {
  it('should delete 1 post object', () => {
    request(app)
      .delete('/posts/5')
      .set('Authorization', token)
      .expect(200)
      .end();
  });
  it('should refuse request and return status 501', () => {
    request(app)
      .put('/posts/5')
      .expect(501)
      .end();
  });
});
