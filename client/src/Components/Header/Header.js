import React from 'react';

const Header = () => {
  return (
    <header id='top'>
      <h1>NOAA Sea Level Rise API</h1>
      <h4>This REST API contains sea level trend data for National Oceanic and Atmospheric Administration (NOAA) tide stations across the United States. Details about the NOAA data can be found <a href='https://tidesandcurrents.noaa.gov/sltrends/sltrends_us.html'>HERE</a>. Users can access data for U.S. States and tide stations from the database, as well as post additional states and stations and delete stations.</h4>
      <h2>Requests</h2>
      <h4 id='base-text'>The base URL for all requests is:</h4>
      <h4 id='base-url'>https://sea-level-rise-data.herokuapp.com</h4>
    </header>
  )
}

export default Header;