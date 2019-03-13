const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.get('/api/v1/states', async (req, res) => {
  try {
    const states = await database('states').select();
    return res.status(200).json(states);
  } catch(error) {
    return res.status(500).json({ error })
  }
});

app.get('/api/v1/stations', async (req, res) => {
  try {
    const stations = await database('stations').select();
    return res.status(200).json(stations);
  } catch (error) {
    return res.status(500).json({ error })
  }
});

app.get('/api/v1/stations/:state_name', async (req, res) => {
  const { state_name } = req.params;  
  try {
    const state = await database('states').select('id').where('name', state_name);
    if (state.length === 0) return res.status(422).json(`State ${state_name} not found.`);
    const stations = await database('stations').select().where('state_id', state[0].id);
    return res.status(200).json(stations);
  } catch (error) {
    return res.status(500).json({ error })
  }
});

// get all stations given a slr greater than or less than parameter
  // /api/v1/stations?greater_than=3

app.post('/api/v1/stations/new/:state_name', async (req, res) => {
  const { noaa_id, name, slr_rate } = req.body;
  const { state_name } = req.params;
  for (let requiredParameter of ['noaa_id', 'name', 'slr_rate']) {
    if (!req.body[requiredParameter]) return res.status(422).json(`Expected format: { name: <String>, noaa_id: <Integer>, slr_rate: <Float> }. You are missing a ${requiredParameter}`);
  }

  try {
    const state = await database('states').select('id').where('name', state_name);
    if (state.length === 0) return res.status(404).json(`State ${state_name} not found.`);
    // check db to see if station already exists?
    const stationId = await database('stations').insert({
      state_id: state[0].id,
      noaa_id,
      name,
      slr_rate
    }, 'id');
    return res.status(201).json(stationId);
  } catch (error) {
    return res.status(500).json({ error })
  }

});

app.post('/api/v1/states/new', async (req, res) => {
  const { name, coast } = req.body;
  for (let requiredParameter of ['name', 'coast']) {
    if (!req.body[requiredParameter]) return res.status(422).json(`Expected format: { name: <String>, noaa_id: <Integer>, slr_rate: <Float> }. You arer missing a ${requiredParameter}`);
  }

  try {
    // check db to see if state already exists?
    const stateId = await database('states').insert({
      name,
      coast
    }, 'id');
    return res.status(201).json(stateId)
  } catch(error) {
    return res.status(500).json({ error })
  }
});

app.delete('/api/v1/states/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await database('states').where('id', id).del();
    return res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({ error })
  }
});

app.delete('/api/v1/stations/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await database('stations').where('id', id).del();
    return res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({ error })
  }
});


// EXTRAS

// get an individual station with the noaa id
// get all stations for a given coast

module.exports = app;