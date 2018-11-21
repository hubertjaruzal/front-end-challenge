import { processAlbums } from './index.js';
import { mockedAlbums } from './mocks';

it('test processAlbums', () => {
  expect(processAlbums(mockedAlbums)).toEqual([
    {
      artist: 'Various Artists',
      id: '1439343342',
      image: 'https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/93/92/f2/9392f23e-ab11-89c1-9bff-61132e917d08/075679877116.jpg/170x170bb-85.png',
      name: 'The Greatest Showman: Reimagined'
    },
    {
      artist: 'Michael Bublé',
      id: '1436702494',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/55/b4/45/55b445c0-3d67-167b-0ccc-54bdb1e9b42d/093624903406.jpg/170x170bb-85.png',
      name: 'love (Deluxe Edition)'
    },
    {
      artist: 'Mumford & Sons',
      id: '1436532915',
      image: 'https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/47/21/19/472119fe-faab-e48a-418d-cbe729156183/00044003199552.rgb.jpg/170x170bb-85.png',
      name: 'Delta'
    },
    {
      artist: 'Queen',
      id: '932648190',
      image: 'https://is5-ssl.mzstatic.com/image/thumb/Music3/v4/db/a3/9a/dba39a3c-03fc-94a4-8f94-a8a69d9cdf5c/UMG_cvrart_00050087319090_01_RGB72_1500x1500_14DMGIM05632.jpg/170x170bb-85.png',
      name: 'The Platinum Collection (Greatest Hits I, II & III)'
    },
  ]);
});