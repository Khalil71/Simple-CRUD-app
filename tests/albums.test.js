const expect = require('expect');
const request = require('supertest');
const { token } = require('../headerAuth');
const app = require('../app');

describe('GET /albums', () => {
  it('should get all albums', () => {
    request(app)
      .get('/albums')
      .set('Authorization', token)
      .expect(200)
      .expect(res => {
        expect(res.body.data.length).toBeGreaterThan(0);
      })
      .end();
  });
  it('should refuse request and return status 501', () => {
    request(app)
      .get('/albums')
      .expect(501)
      .end();
  });
});

describe('GET /albums/:id', () => {
  it('should get 1 album object', () => {
    request(app)
      .get('/albums/5')
      .set('Authorization', token)
      .expect(200)
      .expect(res => {
        expect(res.body.data.userId).toBe(1);
        expect(res.body.data.id).toBe(5);
        expect(res.body.data.title).toBeA('string');
      })
      .end();
  });
  it('should refuse request and return status 501', () => {
    request(app)
      .get('/albums')
      .expect(501)
      .end();
  });
});

describe('POST /albums', () => {
  it('should post object', () => {
    const bodyData = {
      title: 'foo',
    };
    request(app)
      .post('/albums')
      .set('Authorization', token)
      .send(bodyData)
      .expect(200)
      .expect(res => {
        expect(res.body.data.title).toBe('foo');
      })
      .end();
  });
  it('should refuse request and return status 501', () => {
    const bodyData = {
      title: 'foo',
    };
    request(app)
      .post('/albums')
      .send(bodyData)
      .expect(501)
      .end();
  });
});

describe('PUT /albums/:id', () => {
  it('should update 1 object', () => {
    const bodyData = {
      title: 'baz',
    };
    request(app)
      .put('/albums/5')
      .set('Authorization', token)
      .send(bodyData)
      .expect(200)
      .expect(res => {
        expect(res.body.data.title).toBe('baz');
      })
      .end();
  });
  it('should refuse request and return status 501', () => {
    const bodyData = {
      title: 'baz',
    };
    request(app)
      .put('/albums/5')
      .send(bodyData)
      .expect(501)
      .end();
  });
});

describe('delete /albums/:id', () => {
  it('should delete 1 album object', () => {
    request(app)
      .delete('/albums/5')
      .set('Authorization', token)
      .expect(200)
      .end();
  });
  it('should refuse request and return status 501', () => {
    request(app)
      .put('/albums/5')
      .expect(501)
      .end();
  });
});
