import _get from 'lodash/get';

const setAlbums = (data) => ({
  type: 'SET_ALBUMS',
  data
});

const getAlbums = () => async (dispatch) => {
  let res = await fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json');
  let data = await res.json();

  if (_get(data, 'feed.entry')) {    
    dispatch(setAlbums(data.feed.entry));
  }
}

export {
  getAlbums
};