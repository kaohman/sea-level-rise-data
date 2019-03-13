# NOAA Sea Level Rise Data
This REST API contains sea level trend data for National Oceanic and Atmospheric Administration (NOAA) tide stations across the United States. Details about the NOAA data can be found [HERE](https://tidesandcurrents.noaa.gov/sltrends/sltrends_us.html). Users can access data for U.S. states and tide stations from the database, as well as post additional states and stations and delete stations.

## Requests
All GET, POST, and DELETE requests to the API endpoints are outlined below.

### States

* ##### GET `api/v1/states`
  Response sends all states in the database.
  
* ##### POST `api/v1/states`
  Users can post a new state to the states table. Required parameters for the request body are outlined below:
  
  | Parameters    | Format        | Details                             |
  | --------------|:-------------:|------------------------------------:|
  | Name          | string        | State name                          |
  | Coast         | string        | Ocean coastline, ex. Atlantic Coast |
  
  
* ##### GET `api/v1/states/:id`
  Response sends single state that matches the `id` parameter in the request.
  
### Stations

