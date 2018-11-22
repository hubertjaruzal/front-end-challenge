const setLikes = (data) => ({
  type: 'SET_LIKES',
  data
});

const toggleLike = (id) => (dispatch) => {
  let data = [id];
  if (window.localStorage.itunesAlbumsLikes) {
    let itunesAlbumsLikes = JSON.parse(window.localStorage.itunesAlbumsLikes);

    if (itunesAlbumsLikes.find(identifier => identifier === id)) {
      data = itunesAlbumsLikes.filter(identifier => identifier !== id);
    } else {
      data = itunesAlbumsLikes.concat(id);
    }
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
  toggleLike,
  getLikes
};