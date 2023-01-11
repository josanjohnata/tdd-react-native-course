import {render} from '@testing-library/react-native';
import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import App from '../App';

import AppNavigator from '../screens';
import store from '../store';

jest.mock('../screens', () => jest.fn());
jest.mock('react-redux', () => {
  return {
    ...jest.requireActual<object>('react-redux'),
    Provider: jest.fn(),
  };
});

describe('App', () => {
  test('Should render routes', () => {
    (Provider as jest.Mock).mockImplementationOnce(({children}) => children);

    (AppNavigator as jest.Mock).mockReturnValueOnce(
      <View testID="mock-routes" />,
    );
    const wrapper = render(<App />);
    wrapper.getByTestId('mock-routes');
  });

  test('Should render Provider', () => {
    let providerStore!: typeof store;

    (Provider as jest.Mock).mockImplementationOnce(({store}) => {
      providerStore = store;
      return <View testID="mock-provider" />;
    });

    const wrapper = render(<App />);
    wrapper.getByTestId('mock-provider');
    expect(providerStore).toBe(store);
  });
});
