import {render} from '@testing-library/react-native';
import React from 'react';
import {WeatherCurrent} from '../WeatherCurrent';

describe('WeatherCurrent', () => {
  it('Should render correctly', () => {
    const wrapper = render(<WeatherCurrent />);
    wrapper.getByTestId('weather-current');
  });
});
