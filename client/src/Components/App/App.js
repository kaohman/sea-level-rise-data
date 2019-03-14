import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Requests from '../Requests/Requests';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Route path='/requests' component={Requests} />
      </div>
    );
  }
}

export default withRouter(App);
