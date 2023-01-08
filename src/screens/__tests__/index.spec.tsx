import React, {useEffect} from 'react';
import {AppNavigator} from '..';
import HomeScreen from '../HomeScreen';
import {View} from 'react-native';
import {render, waitFor} from '@testing-library/react-native';
import {useNavigation} from '@react-navigation/native';
import {WeatherScreen} from '../WeatherScreen';

jest.mock('../HomeScreen', () => jest.fn());
jest.mock('../WeatherScreen', () => jest.fn());

describe('AppNavigator', () => {
  it('should render HomeScreen by default', async () => {
    (HomeScreen as jest.Mock).mockRejectedValueOnce(
      <View testID="mock-home-screen" />,
    );
    const wrapper = render(<AppNavigator />);

    await waitFor(() => {
      wrapper.getByTestId('mock-home-screen');
    });
  });

  it('Should render WeatherScreen on "Weather" route', async () => {
    (HomeScreen as jest.Mock).mockImplementationOnce(() => {
      const navigation = useNavigation();

      useEffect(() => {
        navigation.navigate('Weather');
      }, [navigation]);

      return null;
    });

    (WeatherScreen as jest.Mock).mockRejectedValueOnce(
      <View testID="mock-weather-screen" />,
    );

    const wrapper = render(<AppNavigator />);

    await waitFor(() => {
      wrapper.getByTestId('mock-weather-screen');
    });
  });
});
