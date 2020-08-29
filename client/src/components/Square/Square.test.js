import React from 'react';
// import toJson from 'enzyme-to-json';

// component
import Square from './Square';

// utils
import { setShallow, findByTestAttr, checkProps } from '../../tests/testUtils';

describe('<Square />', () => {
  let wrapper;
  beforeEach(() => {
    const options = {
      color: '#002a38',
      height: 7,
      id: 30,
      posX: 50,
      posY: 50,
      shadow: true,
      width: 30,
    };
    wrapper = setShallow(<Square options={options} text="test" />);
  });

  it('renders without an error', () => {
    const square = findByTestAttr(wrapper, 'square');
    expect(square).toHaveLength(1);
  });

  it('renders text in square body, if text is passed', () => {
    const squareBody = findByTestAttr(wrapper, 'square-body');
    expect(squareBody).toHaveLength(1);
    expect(squareBody.text()).toBe('test');
  });

  it('recieves expected props', () => {
    const expectedProps = {
      text: 'test',
      options: {
        color: '#002a38',
        height: 7,
        id: 30,
        posX: 50,
        posY: 50,
        shadow: true,
        width: 30,
      },
    };
    const err = checkProps(Square, expectedProps, 'props');
    expect(err).toBeUndefined();
  });

  // it('matches snapshot', () => {
  //   const square = findByTestAttr(wrapper, 'square');
  //   expect(toJson(square)).toMatchSnapshot();
  //   expect(square).toMatchSnapshot();
  // });
});
