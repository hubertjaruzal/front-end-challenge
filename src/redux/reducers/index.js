import { combineReducers } from 'redux';

import albums from './Albums';
import likes from './Likes';

export default combineReducers({
  albums,
  likes
});
