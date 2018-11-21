import _uniq from 'lodash/uniq';

const setLikes = (data) => ({
  type: 'SET_LIKES',
  data
});

const like = (id) => (dispatch) => {
  let data = [id];
  if (window.localStorage.itunesAlbumsLikes) {
    let itunesAlbumsLikes = JSON.parse(window.localStorage.itunesAlbumsLikes);
    data = _uniq(itunesAlbumsLikes.concat(id));
  }
  window.localStorage.setItem('itunesAlbumsLikes', JSON.stringify(data));
  dispatch(setLikes(data));
}

const getLikes = () => (dispatch) => {
  if (window.localStorage.itunesAlbumsLikes) {
    dispatch(setLikes(JSON.parse(window.localStorage.itunesAlbumsLikes)));
  }
}

export {
  like,
  getLikes
};