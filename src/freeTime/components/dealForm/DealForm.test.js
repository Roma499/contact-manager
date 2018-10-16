import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import { DealForm } from './DealForm';

it('renders without crashing', () => {
  shallow(<DealForm />);
});
