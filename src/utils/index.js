import _get from 'lodash/get';

export const getItemImage = (images) => {
  if (Array.isArray(images) && images.length) {
    return _get(images[images.length - 1], 'label', '');
  }
  return '';
}

export const processAlbums = (data) => (
  data.map(item => ({
    id: _get(item, 'id.attributes["im:id"]'),
    name: _get(item, '["im:name"].label'),
    artist: _get(item, '["im:artist"].label'),
    image: getItemImage(item['im:image']),
    details: {
      price: _get(item, '["im:price"].label'),
      category: _get(item, 'category.attributes.label'),
      releaseDate: _get(item, '["im:releaseDate"].attributes.label'),
      link: _get(item, 'link.attributes.href'),
    }
  })).filter(album => album.id && album.name && album.artist)
);

export const isAlbumLiked = (likes, albumID) => {
  return !!likes.find(id => id === albumID);
}