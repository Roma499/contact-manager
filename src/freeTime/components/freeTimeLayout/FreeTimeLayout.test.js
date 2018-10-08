import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { FreeTimeLayout } from './FreeTimeLayout';

function createNodeMock(element) {
  if (element.type === 'div') {
    return {
      current: { clientHeight: 0 }
    };
  }
  return null;
}
function createProps() {
  return {
    pixelsInMinute: null,
    deals: [
      {
        id: 1,
        start: 30600000,
        finish: 31300000
      },
      {
        id: 2,
        start: 40600000,
        finish: 53300000
      }
    ],
    setLayoutConfig: jest.fn(),
    updateDeal: jest.fn()
  };
}

describe('render deal without errors', () => {
  it('renders without crashing', () => {
    mount(<FreeTimeLayout {...createProps()} />);
  });
  it('renders correctly', () => {
    const tree = renderer
      .create(<FreeTimeLayout {...createProps()} />, { createNodeMock })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should invoke once setLayoutConfig ', () => {
    const setLayoutConfig = jest.fn();
    mount(<FreeTimeLayout {...createProps()} setLayoutConfig={setLayoutConfig} />);
    expect(setLayoutConfig.mock.calls.length).toBe(1);
  });
  it('should update invoke once updateDeal onDrop ', () => {
    const updateDeal = jest.fn();
    const wrapper = mount(<FreeTimeLayout {...createProps()} updateDeal={updateDeal} />);
    wrapper.instance().setDraggedDeal({
      id: 2,
      start: 40600000,
      finish: 53300000
    });
    wrapper.find('.free-time-layout').simulate('drop');
    expect(updateDeal.mock.calls.length).toBe(1);
  });
});
