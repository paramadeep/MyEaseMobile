'use strict';

import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';

var Screens = require('./Screens')
var ScreenMap = require('./ScreensMap')
class Home extends Component{
  render() {
    return(
      <Navigator 
        initialRoute={{screen:ScreenMap.login}} 
        renderScene={Screens.render}
      />
    );
  }
};

module.exports=Home;
