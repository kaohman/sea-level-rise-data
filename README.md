# NOAA Sea Level Rise Data
This REST API contains sea level trend data for National Oceanic and Atmospheric Administration (NOAA) tide stations across the United States. Details about the NOAA data can be found [HERE](https://tidesandcurrents.noaa.gov/sltrends/sltrends_us.html). Users can access data for U.S. states and tide stations from the database, as well as post additional states and stations and delete stations.

## Requests
The base URL for all requests is: 
#### `https://sea-level-rise-data.herokuapp.com`
GET, POST, and DELETE requests to the API endpoints are outlined below. Responses are JSON objects.

### States

* #### GET `api/v1/states`
  Response sends all states in the database. Each state includes the following parameters:
  
  | Parameters | Format  | Details           |
  | :----------|:--------|:------------------|
  | id         | integer | unique identifier |
  | name       | string  | state name        |
  | coast      | string  | ocean coastline   |
  
  Example Response:
  ```json
  [
    {
        "id": 91,
        "name": "Alabama",
        "coast": "Gulf Coast",
        "created_at": "2019-03-12T20:20:55.808Z",
        "updated_at": "2019-03-12T20:20:55.808Z"
    },
    {
        "id": 92,
        "name": "Alaska",
        "coast": "West Coast",
        "created_at": "2019-03-12T20:20:55.816Z",
        "updated_at": "2019-03-12T20:20:55.816Z"
    }
  ]
  ```
  
* #### POST `api/v1/states`
  Users can post a new state to the states table. Response is the unique id created for the new record. Required parameters for the request body are outlined below:
  
  | Parameters | Format  | Details                             |
  | :----------|:--------|:------------------------------------|
  | name       | string  | state name                          |
  | coast      | string  | ocean coastline, ex. Atlantic Coast |
  
  Example Response:
  ```json
  [
    122
  ]
  ```
  
* #### GET `api/v1/states/:id`
  Response sends single state that matches the `id` parameter in the request.
  
  Example Request: `api/v1/states/104`
  
  Response:
  ```json
  [
    {
        "id": 104,
        "name": "Maine",
        "coast": "Northern East Coast",
        "created_at": "2019-03-12T20:20:55.826Z",
        "updated_at": "2019-03-12T20:20:55.826Z"
    }
  ]
  ```
  
### Stations

* #### GET `api/v1/stations`
  Response sends all stations in the database. Each station includes the following parameters:
  
  | Parameters | Format  | Details                     |
  | :----------|:--------|:----------------------------|
  | id         | integer | unique identifier           |
  | noaa_id    | integer | NOAA tide station id        |
  | name       | string  | tide station name           |
  | slr_rate   | float   | sea level rise rate (mm/yr) |
  
  The following query parameters can also be included in the path to filter stations by state and/or sea level rise rate:
  
  | Parameters | Format  | Response                                                      |
  | :----------|:--------|:--------------------------------------------------------------|
  | state_id   | integer | returns all stations with the matching state id               |
  | min        | float   | returns all stations with sea level rise rates >= min (mm/yr) |
  | max        | float   | returns all stations with sea level rise rates <= max (mm/yr) |
  
  Example Request with query parameters: `api/v1/stations?state_id=109&min=4.0&max=5.1`
  
  Response:
  ```json
  [
    {
        "id": 331,
        "state_id": 109,
        "noaa_id": "8534720",
        "slr_rate": 4.09,
        "name": "Atlantic City",
        "created_at": "2019-03-12T20:20:55.889Z",
        "updated_at": "2019-03-12T20:20:55.889Z"
    },
    {
        "id": 330,
        "state_id": 109,
        "noaa_id": "8531680",
        "slr_rate": 4.09,
        "name": "Sandy Hook",
        "created_at": "2019-03-12T20:20:55.889Z",
        "updated_at": "2019-03-12T20:20:55.889Z"
    },
    {
        "id": 332,
        "state_id": 109,
        "noaa_id": "8536110",
        "slr_rate": 4.63,
        "name": "Cape May",
        "created_at": "2019-03-12T20:20:55.890Z",
        "updated_at": "2019-03-12T20:20:55.890Z"
    }
  ]
  ```
  
* #### POST `api/v1/stations`
  Users can post a new station to the stations table. Response is the unique id for the new station that was created. If a duplicate `noaa_id` is given an error response will be sent. Required parameters for the request body are outlined below:
  
  | Parameters | Format  | Details                             |
  | :----------|:--------|:------------------------------------|
  | state_id   | integer | matching state id                   |
  | noaa_id    | integer | NOAA tide station id                |
  | name       | string  | state name                          |
  | slr_rate   | float   | average sea level rise rate (mm/yr) |
  
  Example Response:
  ```json
  [
    542
  ]
  ```
  
* #### GET `api/v1/stations/:id`
  Response sends single station that matches the `id` parameter in the request.
  
  Example Request: `api/v1/stations/345`
  
  Example Response:
  ```json
  [
    {
        "id": 345,
        "state_id": 112,
        "noaa_id": "9435380",
        "slr_rate": 1.72,
        "name": "South Beach",
        "created_at": "2019-03-12T20:20:55.895Z",
        "updated_at": "2019-03-12T20:20:55.895Z"
    }
  ]
  ```

* #### DELETE `api/v1/stations/:id`
  Deletes a single station that matches the `id` parameter in the request. Response is a status code 204. If not match is found, an error response is sent.
