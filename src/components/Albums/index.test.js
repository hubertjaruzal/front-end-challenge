import React from 'react';
import { shallow } from 'enzyme';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { mockedProcessedAlbums } from '../../utils/mocks';

import Albums from './index.js';

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  albums: {
    list: mockedProcessedAlbums
  },
});

const wrapper = shallow(<Albums store={store} />).dive();
const instance = wrapper.instance();

it('test handleSearch method', () => {
  instance.handleSearch({ target: { value: 'lorem' }});
  expect(instance.state.albums).toHaveLength(0);

  instance.handleSearch({ target: { value: 'Michael' }});
  expect(instance.state.albums).toHaveLength(1);

  instance.handleSearch({ target: { value: 'Greatest' }});
  expect(instance.state.albums).toHaveLength(2);
});
