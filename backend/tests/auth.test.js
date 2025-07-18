const request = require('supertest');
const app = require('../server.js');

describe('Authentication', () => {
  beforeAll(async () => {
    // Register a user for login tests
    await request(app)
      .post('/api/auth/register')
      .send({ email: 'fake@example.com', password: 'wrong', name: 'Test', role: 'admin' });
  });

  it('should return 401 for invalid login', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'fake@example.com', password: 'incorrect' }); // wrong password
    expect(res.statusCode).toBe(401);
  });
});

test('sample test', () => {
  expect(1 + 1).toBe(2);
});