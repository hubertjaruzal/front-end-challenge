import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _isEqual from 'lodash/isEqual';
import _get from 'lodash/get';
import { Link } from 'react-router-dom';

import HeartIcon from '../Common/HeartIcon';

import { toggleLike } from '../../redux/actions/Likes';
import { isAlbumLiked } from '../../utils';

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
    this.likeAlbum = this.likeAlbum.bind(this);
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

  likeAlbum() {
    this.props.toggleLike(this.props.match.params.id);
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
                <span>{_get(this.state.details, 'price')}</span>
              </div>
              <div className='details-wrapper'>
                <span>Release Date: </span>
                <span>{_get(this.state.details, 'releaseDate')}</span>
              </div>
              <a href={_get(this.state.details, 'link')} target='_blank' rel='noopener noreferrer'>Link</a>
              <button 
                onClick={this.likeAlbum}
                className={`like ${ isAlbumLiked(this.props.likes.list, this.props.match.params.id) && 'active'}`}
              >
                <HeartIcon />
              </button>
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
  likes: PropTypes.object,
  toggleLike: PropTypes.func,
};

const mapStateToProps = state => ({
  albums: state.albums,
  likes: state.likes,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleLike,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);
