import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { Deal } from './Deal';

describe('render deal without errors', () => {
  const props = {
    pixelsInMinute: 1,
    deals: {
      id: 1,
      start: 30600000,
      finish: 31300000
    },
    setDraggedDeal: jest.fn()
  };
  it('renders without crashing', () => {
    shallow(<Deal {...props} />);
  });
  it('renders correctly', () => {
    const tree = renderer.create(<Deal {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('contact fild FormControl prop error equal false', () => {
  //   const TextInputComponent = shallow(<Deal {...props} />).find(FormControl);
  //   expect(TextInputComponent.props().error).toEqual(false);
  // });
});
