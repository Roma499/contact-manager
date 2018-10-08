import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { TimeScale } from './TimeScale';

it('renders without crashing', () => {
  shallow(<TimeScale />);
});
