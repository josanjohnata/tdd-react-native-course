import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  it('Should render correctly', () => {
    const wrapper = render(<App />);
    wrapper.getAllByTestId('app');
  });
});
