import React from 'react';
import { shallow } from 'enzyme';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { mockedProcessedAlbums } from '../../utils/mocks';

import Album from './index.js';


const mockStore = configureMockStore([thunk]);
const store = mockStore({
  albums: {
    list: mockedProcessedAlbums
  },
  likes: {
    list: []
  }
});

const initialState = {
  artist: '',
  id: '',
  image: '',
  name: '',
  details: {
    category: '',
    link: '',
    price: '',
    releaseDate: '',
  }
}

it('test getAlbum method', () => {
  const wrapper = shallow(<Album store={store} match={{ params: { id: '1234' } }} />).dive();
  const instance = wrapper.instance();

  const wrapper2 = shallow(<Album store={store} match={{ params: { id: '1439343342' } }} />).dive();
  const instance2 = wrapper2.instance();

  instance.getAlbum();

  expect(instance.state).toEqual(initialState);

  instance2.getAlbum();
  expect(instance2.state).toEqual({
    artist: 'Various Artists',
    id: '1439343342',
    image: 'https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/93/92/f2/9392f23e-ab11-89c1-9bff-61132e917d08/075679877116.jpg/170x170bb-85.png',
    name: 'The Greatest Showman: Reimagined',
    details: {
      category: 'Pop',
      link: 'https://itunes.apple.com/us/album/the-greatest-showman-reimagined/1439343342?uo=2',
      price: '$9.99',
      releaseDate: 'November 16, 2018',
    }
  });
});
