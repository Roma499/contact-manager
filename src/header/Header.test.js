import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Header from './Header';

it('renders without crashing', () => {
  shallow(<Header />);
});

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Header />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
