# NOAA Sea Level Rise Data
This REST API contains sea level trend data for National Oceanic and Atmospheric Administration (NOAA) tide stations across the United States. Details about the NOAA data can be found [HERE](https://tidesandcurrents.noaa.gov/sltrends/sltrends_us.html). Users can access data for U.S. states and tide stations from the database, as well as post additional states and stations and delete stations.

## Requests
All GET, POST, and DELETE requests to the API endpoints are outlined below.

### States

* GET `api/v1/states`
