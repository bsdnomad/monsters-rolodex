import React from 'react';
// import { render, cleanup } from '@testing-library/react';
// import { shallow, mount, render } from 'enzyme';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders monsters <div>-s', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.monster')).toBeTruthy();
  });
});
