import { processAlbums } from '../../../utils';

const initialState = {
  list: []
};

const albums = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_ALBUMS':
    return {
      ...state,
      list: processAlbums(action.data),
    };
  default:
    return state;
  }
};

export default albums;