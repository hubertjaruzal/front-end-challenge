export const processAlbums = (data) => (
  data.map(item => ({
    id: item.id.attributes['im:id'],
    name: item['im:name'].label,
    artist: item['im:artist'].label,
    image: item['im:image'][item['im:image'].length - 1].label,
  }))
)