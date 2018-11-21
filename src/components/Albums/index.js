import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getAlbums } from '../../redux/actions/Albums';

import Item from './Item';

import './styles.scss';


class Albums extends Component {

  componentDidMount() {
    this.props.getAlbums();
  }

  render() {
    return (
      <div className='albums'>
        <ul>
          { 
            this.props.albums.list.map(item => (
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
