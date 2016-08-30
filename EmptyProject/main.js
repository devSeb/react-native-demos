/** In order for logging to stream to XDE or the exp CLI you must import the
  * exponent module at some point in your app */
import Exponent from 'exponent';

import React from 'react';
import {AppRegistry, Platform, StatusBar, StyleSheet, View, Text} from 'react-native';


class DevSebDemo extends React.Component {
  state = {
    appIsReady: false
  };

  render() {
      return (
          <Text> Hello, seb </Text>
      );
  }
}

AppRegistry.registerComponent('main', () => DevSebDemo);
