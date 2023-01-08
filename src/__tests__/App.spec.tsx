import React = require('react');
import {AppNavigator} from '../screens';
import {View} from 'react-native';
import {render} from '@testing-library/react-native';
import App from '../App';

jest.mock('../screens', () => jest.fn());

describe('App', () => {
  it('Should render routes', () => {
    (AppNavigator as jest.Mock).mockReturnValueOnce(
      <View testID="mock-routes" />,
    );
    const wrapper = render(<App />);
    wrapper.getByTestId('mock-routes');
  });
});
