import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';

var LoginScreen = require("./App/Screens/LoginScreen")

class MyEas extends Component {
  render() {
    return (
      <Navigator 
        initialRoute={{name: 'My First Scene', index: 0}} 
        renderScene={(route, navigator) => <LoginScreen name={route.name} />}
      />
    );
  }
}

AppRegistry.registerComponent('MyEas', () => MyEas);
