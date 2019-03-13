# NOAA Sea Level Rise Data
This REST API contains sea level trend data for National Oceanic and Atmospheric Administration (NOAA) tide stations across the United States. Details about the NOAA data can be found [HERE](https://tidesandcurrents.noaa.gov/sltrends/sltrends_us.html). Users can access data for U.S. states and tide stations from the database, as well as post additional states and stations and delete stations.

## Requests
All GET, POST, and DELETE requests to the API endpoints are outlined below. Responses are JSON objects.

### States

* ##### GET `api/v1/states`
  Response sends all states in the database. Each state includes the following parameters:
  
  | Parameters | Format  | Details           |
  | :----------|:--------|:------------------|
  | id         | integer | unique identifier |
  | name       | string  | state name        |
  | coast      | string  | ocean coastline   |
  
* ##### POST `api/v1/states`
  Users can post a new state to the states table. Required parameters for the request body are outlined below:
  
  | Parameters | Format  | Details                             |
  | :----------|:--------|:------------------------------------|
  | name       | string  | state name                          |
  | coast      | string  | ocean coastline, ex. Atlantic Coast |
  
  
* ##### GET `api/v1/states/:id`
  Response sends single state that matches the `id` parameter in the request.
  
### Stations


* ##### GET `api/v1/stations`
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
  
  Example request with query parameters: `api/v1/stations?state_id=109&min=4.0&max=5.1`
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
  
* ##### POST `api/v1/states`
  Users can post a new state to the states table. Required parameters for the request body are outlined below:
  
  | Parameters | Format  | Details                             |
  | :----------|:--------|:------------------------------------|
  | name       | string  | state name                          |
  | coast      | string  | ocean coastline, ex. Atlantic Coast |
  
  
* ##### GET `api/v1/states/:id`
  Response sends single state that matches the `id` parameter in the request.

