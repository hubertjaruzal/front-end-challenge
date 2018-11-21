import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';


const Item = (props) => (
  <li>
    <img src={props.image} alt={props.name} />
    <div className="item-text">
      <span>{props.name}</span>
      <span>{props.artist}</span>
    </div>
  </li>
)

Item.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  artist: PropTypes.string,
  image: PropTypes.string,
};

export default Item;
