import { processAlbums, getItemImage, isAlbumLiked } from './index.js';
import { mockedAlbums, mockedProcessedAlbums } from './mocks';

it('test processAlbums', () => {
  expect(processAlbums(mockedAlbums)).toEqual(mockedProcessedAlbums);
});

it('test getItemImage', () => {
  expect(getItemImage([])).toEqual('');

  expect(getItemImage([{ label: 'loremipsum.png' }])).toEqual('loremipsum.png');

  expect(getItemImage([{ label: 'loremipsum.png' }, { label: 'loremipsum2.png' }])).toEqual('loremipsum2.png');

  expect(getItemImage([{ label: 'loremipsum.png' }, { labele: 'loremipsum2.png' }])).toEqual('');
});

it('test isAlbumLiked', () => {
  expect(isAlbumLiked([], '12')).toBeFalsy();

  expect(isAlbumLiked(['12'], '12')).toBeTruthy();

  expect(isAlbumLiked(['1212', '12'], '12')).toBeTruthy();
});