const content = {
  states: [
    {
      id: 1,
      hash: 'get-all',
      type: 'GET',
      path: 'api/v1/states',
      details: 'Response sends all states in the database. Each state in the response includes the following parameters:',
      table: {
        parameters: ['id', 'name', 'coast'],
        format: ['integer', 'string', 'string'],
        details: ['unique identifier', 'state name', 'ocean coastline']
      },
      example: {
        path: 'api/v1/states'
      }
    },
    {
      id: 2,
      hash: 'post',
      type: 'POST',
      path: 'api/v1/states',
      details: 'Users can post a new state to the states table. Response is the unique id created for the new record. Required parameters for the request body are outlined below:',
      table: {
        parameters: ['name', 'coast'],
        format: ['string', 'string'],
        details: ['state name', 'ocean coastline, ex. Atlantic Ocean']
      },
      example: {
        path: 'api/v1/states',
        body: {
          name: 'New State',
          coast: 'Gulf of Mexico'
        }
      }
    },
    {
      id: 3,
      hash: 'get-single',
      type: 'GET',
      path: 'api/v1/states/:id',
      details: 'Response sends single state that matches the id parameter in the request.',
      table: null,
      example: {
        path: 'api/v1/states/1',
      }
    }
  ],
  stations: [
    {
      id: 4,
      hash: 'get-all',
      type: 'GET',
      path: 'api/v1/stations',
      details: 'Response sends all stations in the database. Each station in the response includes the following parameters:',
      table: {
        parameters: ['id', 'noaa_id', 'name', 'slr_rate'],
        format: ['integer', 'integer', 'string', 'float'],
        details: ['unique identifier', 'NOAA tide station id', 'tide station name', 'sea level rise rate (mm/yr)']
      },
      queryText: 'The following query parameters can also be included in the path to filter stations by state and/or sea level rise rate:',
      queryTable: {
        parameters: ['state_id', 'min', 'max'],
        format: ['integer', 'float', 'float'],
        response: ['returns all stations with the matching state id', 'NOAA tide station id', 'returns all stations with sea level rise rates >= min (mm/yr)', 'returns all stations with sea level rise rates <= max (mm/yr)']
      },
      example: {
        path: 'api/v1/stations?state_id=1&min=1.0&max=5.1'
      }
    },
    {
      id: 5,
      hash: 'post',
      type: 'POST',
      path: 'api/v1/stations',
      details: 'Users can post a new station to the stations table. Response is the unique id for the new station that was created. If a duplicate noaa_id is given an error response will be sent. Required parameters for the request body are outlined below:',
      table: {
        parameters: ['state_id', 'noaa_id', 'name', 'slr_rate'],
        format: ['integer', 'integer', 'string', 'float'],
        details: ['matching state id', 'NOAA tide station id', 'state name', 'average sea level rise rate (mm/yr)']
      },
      example: {
        path: 'api/v1/stations',
        body: {
          state_id: 1,
          noaa_id: 1234,
          name: 'New Station',
          slr_rate: 1.0
        }
      }
    },
    {
      id: 6,
      hash: 'get-single',
      type: 'GET',
      path: 'api/v1/stations/:id',
      details: 'Response sends single station that matches the id parameter in the request.',
      table: null,
      example: {
        path: 'api/v1/stations/1',
      }
    },
    {
      id: 7,
      hash: 'delete',
      type: 'DELETE',
      path: 'api/v1/stations/:id',
      details: 'Deletes a single station that matches the id parameter in the request. Response is a status code 204. If not match is found, an error response is sent.',
      table: null,
      example: {
        path: null
      }
    }
  ]
}

export default content;