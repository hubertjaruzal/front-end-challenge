import React from 'react';
import PropTypes from 'prop-types';

import HeartIcon from '../../Common/HeartIcon';

import './styles.scss';


const Item = (props) => (
  <li>
    <img src={props.image} alt={props.name} />
    <div className="item-text">
      <span>{props.name}</span>
      <span>{props.artist}</span>
      {
        props.isLiked &&
        <span className="like">You <HeartIcon/> it!</span>
      }
    </div>
  </li>
)

Item.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  artist: PropTypes.string,
  image: PropTypes.string,
  isLiked: PropTypes.bool,
};

export default Item;
