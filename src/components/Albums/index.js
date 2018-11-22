import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _isEqual from 'lodash/isEqual';
import { Link } from 'react-router-dom';

import Item from './Item';

import { isAlbumLiked } from '../../utils';

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
    this.setState({ albums: this.props.albums.list });
  }

  componentDidUpdate(prevProps) {
    if (!_isEqual(this.props.albums.list, prevProps.albums.list) && Array.isArray(this.props.albums.list)) {
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
        { this.state.albums.length ?
          <ul>
            { this.state.albums.map(item => (
                <Link key={item.id} to={item.id}>
                  <Item
                    name={item.name}
                    artist={item.artist}
                    image={item.image}
                    isLiked={isAlbumLiked(this.props.likes.list, item.id)}
                  />
                </Link>
              ))
            }
          </ul> :
          <span className='zero-state-text'>No items...</span>
        }
      </div>
    );
  }
}

Albums.propTypes = {
  getAlbums: PropTypes.func,
  albums: PropTypes.object,
  likes: PropTypes.object,
};

const mapStateToProps = state => ({
  albums: state.albums,
  likes: state.likes,
});

export default connect(mapStateToProps, null)(Albums);
