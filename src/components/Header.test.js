import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Header from './Header';

it('expect to render header component', () => {
  expect(shallow(<Header />)).toMatchSnapshot();
});
