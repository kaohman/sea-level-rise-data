import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';


const Nav = () => {
  return (
    <div id='nav-sidebar'>
    <div id='fixed-div'>
      <NavLink smooth to='#top'><h5>Back to top</h5></NavLink>
      <NavLink smooth to='#state-top'><h4>States</h4></NavLink>
      <NavLink smooth to='#state-get-all'><h5>GET all states</h5></NavLink>
      <NavLink smooth to='#state-post'><h5>POST new state</h5></NavLink>
      <NavLink smooth to='#state-get-single'><h5>GET single state</h5></NavLink>
      <NavLink smooth to='#station-top'><h4>Stations</h4></NavLink>
      <NavLink smooth to='#station-get-all'><h5>GET all stations</h5></NavLink>
      <NavLink smooth to='#station-post'><h5>POST new station</h5></NavLink>
      <NavLink smooth to='#station-get-single'><h5>GET single station</h5></NavLink>
      <NavLink smooth to='#station-delete'><h5>DELETE station</h5></NavLink>
    </div>
    </div>
  )
}

export default Nav;