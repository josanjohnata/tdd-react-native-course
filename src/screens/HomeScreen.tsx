import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {Colors} from '../constants';
import {Text, View} from 'react-native';
import moment from 'moment';

export default function HomeScreen() {
  const now = moment(new Date());
  return (
    <LinearGradient
      colors={[Colors.LIGHT_GRAY, Colors.DARK_GRAY]}
      testID="home-screen"
      style={styles.linearGradient}>
      <View style={styles.title}>
        <Text style={styles.date}>{now.format('MMM DD, YYYY')}</Text>
        <Text style={styles.day}>{now.format('dddd')}</Text>
      </View>
    </LinearGradient>
  );
}
