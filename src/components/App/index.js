import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getAlbums } from '../../redux/actions/Albums';

import Albums from '../Albums';
import Album from '../Album';

import './styles.scss';

class App extends Component {
  componentDidMount() {
    this.props.getAlbums();
  }

  render() {
    return (
      <Router>
        <div className='app'>
          <section className='content'>
            <h1>Top 100 albums from iTunes</h1>
            <Switch>
              <Route path='/' exact component={Albums} />
              <Route path='/:id' component={Album} />
              <Redirect to='/' />
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getAlbums,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);