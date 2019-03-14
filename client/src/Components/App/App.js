import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Requests from '../Requests/Requests';

class App extends Component {
  render() {
    return (
      <div id='app'>
        <Nav />
        <div id='main-content'>
          <Header />
          <Route path='/' component={Requests} />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
