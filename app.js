const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/v1/states', async (req, res) => {
  try {
    const states = await database('states').select();
    return res.status(200).json(states);
  } catch(error) {
    return res.status(500).json({ error })
  }
});

app.get('/api/v1/stations', async (req, res) => {
  const min = req.query.min;
  const max = req.query.max;
  const state_id = req.query.state_id;

  try {
    let stations = await database('stations').select();
    if (state_id) stations = stations.filter(station => station.state_id === parseInt(state_id));
    if (stations.length === 0) return res.status(404).json(`State id ${state_id} was not found.`)

    if (min) stations = stations.filter(station => station.slr_rate >= min);
    if (stations.length === 0) return res.status(404).json(`No records found greater than ${min}.`)

    if (max) stations = stations.filter(station => station.slr_rate <= max);
    if (stations.length === 0) return res.status(404).json(`No records found less than ${max}.`)

    return res.status(200).json(stations);
  } catch (error) {
    return res.status(500).json({ error })
  }
});

app.get('/api/v1/stations/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const station = await database('stations').select().where('id', parseInt(id));
    if (station.length === 0) return res.status(404).json(`Station id ${id} not found.`);
    return res.status(200).json(station);
  } catch (error) {
    return res.status(500).json({ error })
  }
});

app.get('/api/v1/states/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const state = await database('states').select().where('id', parseInt(id));
    if (state.length === 0) return res.status(404).json(`State id ${id} not found.`);
    return res.status(200).json(state);
  } catch (error) {
    return res.status(500).json({ error })
  }
});

app.post('/api/v1/stations', async (req, res) => {
  const { noaa_id, name, slr_rate, state_id } = req.body;
  for (let requiredParameter of ['noaa_id', 'name', 'slr_rate', 'state_id']) {
    if (!req.body[requiredParameter]) return res.status(422).json(`Expected format: { name: <String>, noaa_id: <Integer>, slr_rate: <Float> }. You are missing a ${requiredParameter}`);
  }

  try {
    const state = await database('states').select('id').where('id', state_id);
    if (state.length === 0) return res.status(404).json(`State id ${state_id} not found.`)

    const dupStation = await database('stations').select().where('noaa_id', noaa_id);
    if (dupStation.length > 0) return res.status(409).json(`Conflict. NOAA tide station id ${noaa_id} already exists`)

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

app.post('/api/v1/states', async (req, res) => {
  const { name, coast } = req.body;
  for (let requiredParameter of ['name', 'coast']) {
    if (!req.body[requiredParameter]) return res.status(422).json(`Expected format: { name: <String>, noaa_id: <Integer>, slr_rate: <Float> }. You are missing a ${requiredParameter}`);
  }

  try {
    const dupStation = await database('states').select().where('name', name);
    if (dupStation.length > 0) return res.status(409).json(`Conflict. State name ${name} already exists`)
    const stateId = await database('states').insert({
      name,
      coast
    }, 'id');
    return res.status(201).json(stateId)
  } catch(error) {
    return res.status(500).json({ error })
  }
});

app.delete('/api/v1/stations/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const matchingStation = database('stations').select().where('id', id);
    if (matchingStation.length === 0) return res.status(404).json(`Station id ${station} not found.`)
    await database('stations').where('id', id).del();
    return res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({ error })
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

module.exports = app;