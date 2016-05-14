'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator
} from 'react-native';

var LoginScreen = require('./Screens/LoginScreen')

class Home extends Component{
  render() {
    return(
      <Navigator 
        initialRoute={{}} 
        renderScene={(route, navigator) => <LoginScreen  />}
      />
    );
  }
};

var styles=StyleSheet.create({

});

module.exports=Home;
