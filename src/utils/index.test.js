import { processAlbums } from './index.js';
import { mockedAlbums, mockedProcessedAlbums } from './mocks';

it('test processAlbums', () => {
  expect(processAlbums(mockedAlbums)).toEqual(mockedProcessedAlbums);
});