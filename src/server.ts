import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

const BASE_URL = 'https://swapi.dev/api/';

app.get('/api/starships/luke', async (req, res) => {
  const response = await axios.get(`${BASE_URL}people/1/`);
  const starshipUrls = response.data.starships;
  const starships = await Promise.all(starshipUrls.map(async (url: string) => {
    const starshipResponse = await axios.get(url);
    return starshipResponse.data.name;
  }));
  res.json(starships);
});

app.get('/api/species/episode1', async (req, res) => {
  const response = await axios.get(`${BASE_URL}films/1/`);
  const speciesUrls = response.data.species;
  const speciesClassifications = await Promise.all(speciesUrls.map(async (url: string) => {
    const speciesResponse = await axios.get(url);
    return {name: speciesResponse.data.name, classification: speciesResponse.data.classification};
  }));
  res.json(speciesClassifications);
});

app.get('/api/planets/total_population', async (req, res) => {
  let totalPopulation = 0;
  let nextUrl = `${BASE_URL}planets/`;

  while (nextUrl) {
    const response = await axios.get(nextUrl);
    response.data.results.forEach((planet: any) => {
      if (planet.population && planet.population !== 'unknown') {
        totalPopulation += parseInt(planet.population, 10);
      }
    });
    nextUrl = response.data.next;
  }

  res.json({ totalPopulation });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;
