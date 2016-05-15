'use strict';

import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';

var LoginScreen = require('./Screens/LoginScreen')
class Home extends Component{
  render() {
    return(
      <Navigator 
        initialRoute={{screen:LoginScreen}} 
        renderScene={(route,navigator)=><route.screen navigator={navigator} data={route.data}/>}
      />
    );
  }
};

module.exports=Home;
