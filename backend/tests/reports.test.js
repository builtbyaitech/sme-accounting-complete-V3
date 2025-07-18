const request = require('supertest');
const app = require('../server.js'); // Adjust if your app file is named differently

let token = '';

beforeAll(async () => {
  // Login to get a token (ensure this user exists in your DB)
  const res = await request(app)
    .post('/api/auth/login')
    .send({ email: 'testuser@example.com', password: 'Test1234!' });
  token = res.body.token;
});

describe('Reports API', () => {
  it('should get the balance sheet', async () => {
    const res = await request(app)
      .get('/api/reports/balance-sheet')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeDefined();
  });

  it('should get the income statement', async () => {
    const res = await request(app)
      .get('/api/reports/income-statement')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeDefined();
  });

  // Add more report endpoint tests as needed
});
test('sample test', () => {
  expect(2 + 2).toBe(4);
});