import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div id='nav-sidebar'>
      <NavLink to='/'><h5>Back to top</h5></NavLink>
      <NavLink to='/states'><h4>States</h4></NavLink>
      <NavLink to='/states/get-all'><h5>GET all states</h5></NavLink>
      <NavLink to='/states/post'><h5>POST new state</h5></NavLink>
      <NavLink to='/states/get-single'><h5>GET single state</h5></NavLink>
      <NavLink to='/stations'><h4>Stations</h4></NavLink>
      <NavLink to='/stations/get-all'><h5>GET all stations</h5></NavLink>
      <NavLink to='/stations/post'><h5>POST new station</h5></NavLink>
      <NavLink to='/stations/get-single'><h5>GET single station</h5></NavLink>
      <NavLink to='/stations/delete'><h5>DELETE station</h5></NavLink>
    </div>
  )
}

export default Nav;