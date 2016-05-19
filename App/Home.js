'use strict';

import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';

import { LoginScreen } from './Screens'

export default class Home extends Component{
  render() {
    return(
      <Navigator 
        initialRoute={{screen:LoginScreen}} 
        renderScene={(route,navigator)=><route.screen navigator={navigator} data={route.data}/>}
      />
    );
  }
};

