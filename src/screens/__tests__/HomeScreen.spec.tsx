import {render} from '@testing-library/react-native';
import React from 'react';
import HomeScreen from '../HomeScreen';
import {View} from 'react-native';
import {day, mockDate} from './mock/HomeScreen.mock';

describe('HomeScreen', () => {
  it('Should render correctly', () => {
    const wrapper = render(
      <View>
        <HomeScreen />
      </View>,
    );
    wrapper.getByTestId('home-screen');
  });

  describe('Title section', () => {
    beforeEach(() => {
      jest.useFakeTimers().setSystemTime(day, mockDate); // Saturday, 01 January 2000 00:00 UTC
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
});
