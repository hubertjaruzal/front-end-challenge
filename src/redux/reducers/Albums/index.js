const initialState = {
  list: []
};

const albums = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_ALBUMS':
    return {
      ...state,
      list: action.data,
    };
  default:
    return state;
  }
};

export default albums;