/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigators/StackNavigator'



export default class App extends PureComponent {
  render() {
    return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    );
  }
}

