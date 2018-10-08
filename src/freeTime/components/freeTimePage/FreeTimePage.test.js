import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import FreeTimeLayout from './FreeTimePage';

it('renders without crashing', () => {
  shallow(<FreeTimeLayout />);
});
