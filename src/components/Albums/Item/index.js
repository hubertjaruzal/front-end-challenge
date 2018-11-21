import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';


class Item extends Component {
  render() {
    return (
      <li>
        <img src={this.props.image} alt={this.props.name} />
        <div className="item-text">
          <span>{this.props.name}</span>
          <span>{this.props.artist}</span>
        </div>
      </li>
    );
  }
}

Item.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  artist: PropTypes.string,
  image: PropTypes.string,
};

export default Item;
