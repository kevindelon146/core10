# Star Wars Information API

This API provides information about Star Wars universe by connecting to the Star Wars API (SWAPI). Built with Node.js and Express.

## Setup

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory and install dependencies:
   ```bash
   cd <project_dir>
   npm install
   ```
3. Run the server:
   ```bash
   npm start
   ```

## Usage

The API has three endpoints:

1. `/api/starships/luke`: Returns a list of the Starships related to Luke Skywalker.

   Usage:
   ```bash
   curl http://localhost:3000/api/starships/luke
   ```

2. `/api/species/episode1`: Returns the classification of all species in the 1st episode.

   Usage:
   ```bash
   curl http://localhost:3000/api/species/episode1
   ```

3. `/api/planets/total_population`: Returns the total population of all planets in the Galaxy.

   Usage:
   ```bash
   curl http://localhost:3000/api/planets/total_population
   ```

## Testing

To run the tests:
```bash
npm test
```