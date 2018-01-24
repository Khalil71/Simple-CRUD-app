const expect = require('expect');
const request = require('supertest');
const { token } = require('../headerAuth');
const app = require('../app');

describe('GET /collections', () => {
  it('should get all 30 collections', () => {
    request(app)
      .get('/collections')
      .set('Authorization', token)
      .expect(200)
      .expect(res => {
        expect(res.body.data[0].length).toEqual(30);
      })
      .end();
  });
  it('should refuse request and return status 501', () => {
    request(app)
      .get('/collections')
      .expect(501)
      .end();
  });
});
