import React from 'react';
import {View} from 'react-native';
import {render} from '../../utils/test.utils';
import store from '..';

describe('Store', () => {
  test('Should be a valid store', () => {
    const wrapper = render(<View testID="mock-component" />, {store});
    wrapper.getByTestId('mock-component');
  });
});
