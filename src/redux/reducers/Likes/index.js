const initialState = {
  list: []
};

const likes = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_LIKES':
    return {
      ...state,
      list: action.data,
    };
  default:
    return state;
  }
};

export default likes;