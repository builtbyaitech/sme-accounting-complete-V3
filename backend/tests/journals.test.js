const request = require('supertest');
const app = require('../server.js'); // Adjust if your app file is named differently

let token = '';
let journalId = '';

beforeAll(async () => {
  // Login to get a token (ensure this user exists in your DB)
  const res = await request(app)
    .post('/api/auth/login')
    .send({ email: 'testuser@example.com', password: 'Test1234!' });
  token = res.body.token;
});

describe('Journal Entries API', () => {
  it('should create a new journal entry', async () => {
    const res = await request(app)
      .post('/api/journals')
      .set('Authorization', `Bearer ${token}`)
      .send({
        date: '2025-06-10',
        description: 'Test Entry',
        entries: [
          { account: 'Cash', debit: 100, credit: 0 },
          { account: 'Revenue', debit: 0, credit: 100 }
        ]
      });
    expect([200, 201]).toContain(res.statusCode);
    journalId = res.body._id || res.body.id;
  });

  it('should get all journal entries', async () => {
    const res = await request(app)
      .get('/api/journals')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should update a journal entry', async () => {
    const res = await request(app)
      .put(`/api/journals/${journalId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ description: 'Updated Entry' });
    expect([200, 204]).toContain(res.statusCode);
  });

  it('should delete a journal entry', async () => {
    const res = await request(app)
      .delete(`/api/journals/${journalId}`)
      .set('Authorization', `Bearer ${token}`);
    expect([200, 204]).toContain(res.statusCode);
  });
});
test('sample test', () => {
  expect(2 + 2).toBe(4);
});