import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import NumberField from './NumberField';

describe('render field without errors', () => {
  const props = {
    input: {
      name: 'firstName',
      onBlur: jest.fn(),
      onChange: jest.fn(),
      onDragStart: jest.fn(),
      onDrop: jest.fn(),
      onFocus: jest.fn(),
      value: ''
    },
    meta: {
      touched: false,
      error: undefined
    },
    name: 'firstName',
    type: 'text'
  };
  it('renders without crashing', () => {
    shallow(<NumberField {...props} />);
  });
  it('renders correctly', () => {
    const tree = renderer.create(<NumberField {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contact fild FormControl prop error equal false', () => {
    const TextInputComponent = shallow(<NumberField {...props} />).find(FormControl);
    expect(TextInputComponent.props().error).toEqual(false);
  });
});
describe('delete contact', () => {
  const props = {
    input: {
      name: 'firstName',
      onBlur: jest.fn(),
      onChange: jest.fn(),
      onDragStart: jest.fn(),
      onDrop: jest.fn(),
      onFocus: jest.fn(),
      value: ''
    },
    meta: {
      touched: true,
      error: 'This field is required'
    },
    name: 'firstName',
    type: 'text'
  };
  it('check if field has error', () => {
    const TextFieldComponent = mount(<TextField {...props} />);
    expect(TextFieldComponent.find(FormHelperText)).toHaveLength(1);
  });
  it('contact fild FormControl prop error equal true', () => {
    const TextInputComponent = shallow(<TextField {...props} />).find(FormControl);
    expect(TextInputComponent.props().error).toEqual(true);
  });
});
