import React from 'react';
import { shallow } from 'enzyme';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import App from './index.js';

const mockStore = configureMockStore([thunk]);
const store = mockStore({
    albums: {
        list: []
    },
});

const wrapper = shallow(<App store={store} />).dive();

it('renders without crashing', () => {
  expect(wrapper.find('.app').length).toBe(1);
});
