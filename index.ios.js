import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import  Home  from './App/Home'

class MyEas extends Component {
  render() {
    return (
      <Home/>
    );
  }
}

AppRegistry.registerComponent('MyEas', () => MyEas);
