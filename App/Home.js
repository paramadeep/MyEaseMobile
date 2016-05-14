'use strict';

import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';

var Screens = require('./Screens')
class Home extends Component{
  render() {
    return(
      <Navigator 
        initialRoute={{screen:Screens.login}} 
        renderScene={(route,navigator)=><route.screen navigator={navigator} data={route.data}/>}
      />
    );
  }
};

module.exports=Home;
