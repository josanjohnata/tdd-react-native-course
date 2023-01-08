import {render} from '@testing-library/react-native';
import React from 'react';
import HomeScreen from '../HomeScreen';
import {WeatherCurrent} from '../../components/WeatherCurrent';
import {View} from 'react-native';
import {WeatherCoordinates} from '../../components/WeatherCoordinates';

jest.mock('../../components/WeatherCurrent', () =>
  jest.fn().mockReturnValue(null),
);
jest.mock('../../components/WeatherCoordinations', () =>
  jest.fn().mockReturnValue(null),
);

describe('HomeScreen', () => {
  it('Should render correctly', () => {
    const wrapper = render(<HomeScreen />);
    wrapper.getByTestId('home-screen');
  });

  describe('Title section', () => {
    beforeEach(() => {
      jest.useFakeTimers('modern');
      jest.setSystemTime(946648800000); // Saturday, 01 January 2000 00:00 UTC
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('should contain correct date', () => {
      const wrapper = render(<HomeScreen />);
      wrapper.getByText('Jan 01, 2000');
    });

    it('should contain correct day', () => {
      const wrapper = render(<HomeScreen />);
      wrapper.getByText('Saturday');
    });
  });

  it('Should contain a divider', () => {
    const wrapper = render(<HomeScreen />);
    wrapper.getByTestId('home-screen-divider');
  });

  it('Should contain a section to get current weather', () => {
    (WeatherCurrent as jest.Mock).mockResolvedValue(
      <View testID="mock-weather-current" />,
    );

    const wrapper = render(<HomeScreen />);
    wrapper.getByTestId('mock-weather-current');
  });

  it('Should contain a section to get weather at given latitude $ longitude', () => {
    (WeatherCoordinates as jest.Mock).mockResolvedValue(
      <View testID="mock-weather-coordinates" />,
    );

    const wrapper = render(<HomeScreen />);
    wrapper.getByTestId('mock-weather-coordinates');
  });
});
