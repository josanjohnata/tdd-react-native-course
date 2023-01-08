import React from 'react';
import {WeatherCoordinates} from '../WeatherCoordinates';
import {render} from '@testing-library/react-native';

describe('WeatherCoordinates', () => {
  it('Should render correctly', () => {
    const wrapper = render(<WeatherCoordinates />);
    wrapper.getByTestId('weather-coordinates');
  });
});
