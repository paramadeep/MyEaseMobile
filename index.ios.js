import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

var Home = require("./App/Home")

class MyEas extends Component {
  render() {
    return (
      <Home/>
    );
  }
}

AppRegistry.registerComponent('MyEas', () => MyEas);
