import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _isEqual from 'lodash/isEqual';
import { Link } from 'react-router-dom';

import './styles.scss';


class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: '',
      id: '',
      image: '',
      name: '',
      details: {
        category: '',
        link: '',
        price: '',
        releaseDate: '',
      }
    }

    this.getAlbum = this.getAlbum.bind(this);
  }

  componentDidMount() {
    this.setState({ ...this.getAlbum(this.props.match.params.id) });
  }

  componentDidUpdate(prevProps) {
    if (!_isEqual(this.props.albums.list, prevProps.albums.list) && Array.isArray(this.props.albums.list)) {
      this.setState({ ...this.getAlbum(this.props.match.params.id) });
    }
  }

  getAlbum() {
    return this.props.albums.list.find(item => item.id === this.props.match.params.id);
  }

  render() {
    return (
      <Fragment>
        {
          this.state.id ?
          <div className='album'>
            <img src={this.state.image} alt={this.state.name} />
            <div className='main-info'>
              <span>{this.state.name}</span>
              <span>{this.state.artist}</span>
            </div>
            <div className='details'>
              <div className='details-wrapper'>
                <span>Category: </span>
                <span>{this.state.details.category}</span>
              </div>
              <div className='details-wrapper'>
                <span>Price: </span>
                <span>{this.state.details.price}</span>
              </div>
              <div className='details-wrapper'>
                <span>Release Date: </span>
                <span>{this.state.details.releaseDate}</span>
              </div>
              <a href={this.state.details.link} target='_blank' rel='noopener noreferrer'>Link</a>
            </div>
          </div> :
          <div className='album'>
            <span className='zero-state-text'>Album not found...</span>
          </div>
        }
        <Link className='link-back' to='/'>back to albums</Link>
      </Fragment>
    );
  }
}

Album.propTypes = {
  albums: PropTypes.object,
};

const mapStateToProps = state => ({
  albums: state.albums,
});

export default connect(mapStateToProps, null)(Album);
