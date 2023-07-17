import request from 'supertest';
import app from '../src/server';

describe('GET /api/starships/luke', () => {
  it('should return a list of starships', async () => {
    const res = await request(app)
      .get('/api/starships/luke')
      .send();
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe('GET /api/species/episode1', () => {
  it('should return species classifications', async () => {
    const res = await request(app)
      .get('/api/species/episode1')
      .send();
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    res.body.forEach(species => {
      expect(species).toHaveProperty('name');
      expect(species).toHaveProperty('classification');
    });
  });
});

describe('GET /api/planets/total_population', () => {
  it('should return total population', async () => {
    const res = await request(app)
      .get('/api/planets/total_population')
      .send();
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('totalPopulation');
    expect(typeof res.body.totalPopulation).toBe('number');
  });
});
