import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Albums from '../Albums';

import './styles.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <section className='content'>
            <h1>Top 100 albums from iTunes</h1>
            <Switch>
              <Route path='/' exact component={Albums} />
              <Redirect to='/' />
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;