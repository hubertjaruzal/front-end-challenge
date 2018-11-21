import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getAlbums } from '../../redux/actions/Albums';
import { getLikes } from '../../redux/actions/Likes';

import Albums from '../Albums';
import Album from '../Album';

import './styles.scss';

class App extends Component {
  componentDidMount() {
    this.props.getAlbums();
    this.props.getLikes();
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

App.propTypes = {
  getAlbums: PropTypes.func,
  getLikes: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getAlbums,
    getLikes
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);