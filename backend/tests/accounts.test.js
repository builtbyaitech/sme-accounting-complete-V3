const request = require('supertest');
const app = require('../server.js');// Adjust if your app file is named differently

let token = '';

beforeAll(async () => {
  // Login to get a token
  const res = await request(app)
    .post('/api/auth/login')
    .send({ email: 'testuser@example.com', password: 'Test1234!' });
  token = res.body.token;
});

describe('Accounts', () => {
  let accountId = '';

  it('should create a new account', async () => {
    const res = await request(app)
      .post('/api/accounts')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Cash', type: 'Asset' });
    expect([200, 201]).toContain(res.statusCode);
    accountId = res.body._id || res.body.id;
  });

  it('should get all accounts', async () => {
    const res = await request(app)
      .get('/api/accounts')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should update an account', async () => {
    const res = await request(app)
      .put(`/api/accounts/${accountId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Cash Updated' });
    expect([200, 204]).toContain(res.statusCode);
  });

  it('should delete an account', async () => {
    const res = await request(app)
      .delete(`/api/accounts/${accountId}`)
      .set('Authorization', `Bearer ${token}`);
    expect([200, 204]).toContain(res.statusCode);
  });
});
test('sample test', () => {
  expect(2 + 2).toBe(4);
});