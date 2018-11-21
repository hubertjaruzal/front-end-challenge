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
    image: getItemImage(item['im:image'])
  })).filter(album => album.id && album.name && album.artist)
);