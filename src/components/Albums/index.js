import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _isEqual from 'lodash/isEqual';

import { getAlbums } from '../../redux/actions/Albums';

import Item from './Item';

import './styles.scss';


class Albums extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: []
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.props.getAlbums();
  }

  componentDidUpdate(prevProps) {
    if (!_isEqual(this.props.albums.list, prevProps.albums.list)) {
      this.setState({ albums: this.props.albums.list })
    }
  }

  handleSearch(e) {
    this.setState({
      albums: this.props.albums.list.filter(item => (
        item.name.toLowerCase().includes(e.target.value.toLowerCase()) || 
        item.artist.toLowerCase().includes(e.target.value.toLowerCase())
      ))
    })
  }

  render() {
    return (
      <div className='albums'>
        <div className='search-container'>
          <input
            className='search-input'
            onChange={this.handleSearch}
            placeholder='Search...'
          />
        </div>
        <ul>
          { 
            this.state.albums.map(item => (
              <Item
                key={item.id}
                name={item.name}
                artist={item.artist}
                image={item.image}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

Albums.propTypes = {
  getAlbums: PropTypes.func,
  albums: PropTypes.object,
};

const mapStateToProps = state => ({
  albums: state.albums,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getAlbums,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
