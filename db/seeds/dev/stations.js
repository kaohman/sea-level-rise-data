const stations = require('../../../rawData/stations');
const states = require('../../../rawData/states');

const createState = (knex, state) => {
  const { name, coast } = state;
  return knex('states').insert({ name, coast }, 'id')
  .then(stateId => {
    let stationPromises = [];
    const matchingStations = stations.filter(station => station.state === name);
    matchingStations.forEach(station => {
      const { stationId, slrRate } = station;
      stationPromises.push(
        createStation(knex, {
          state_id: stateId[0],
          noaa_id: stationId,
          name: station.name,
          slr_rate: slrRate
        })
      )
    })
    return Promise.all(stationPromises);
  });
}

const createStation = (knex, station) => {
  return knex('stations').insert(station)
}

exports.seed = function(knex, Promise) {
  return knex('stations').del()
  .then(() => knex('states').del())
  .then(() => {
    let statePromises = [];
    states.forEach(state => {
      statePromises.push(createState(knex, state))
    });
    return Promise.all(statePromises)
  })
  .catch(error => console.log(`Error seeding data: ${error}`));
};
