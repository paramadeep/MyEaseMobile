'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
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

var styles=StyleSheet.create({

});

module.exports=Home;
