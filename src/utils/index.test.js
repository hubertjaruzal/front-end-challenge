import { processAlbums, getItemImage } from './index.js';
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