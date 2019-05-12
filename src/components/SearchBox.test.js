import React from 'react';
import { shallow, mount, render } from 'enzyme';
import SearchBox from './SearchBox';

it('expect to render SearchBox component', () => {
  expect(shallow(<SearchBox />)).toMatchSnapshot(); //.length).toEqual(1);
});
