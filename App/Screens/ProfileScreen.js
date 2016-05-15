'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import {
  Title,
  Button,
} from '../Components';


class ProfileScreen  extends Component{
  render() {
    return(
      <View>
        <Title text='Profile'/>
      </View>
    );
  }
};

var styles=StyleSheet.create({

});
module.exports=ProfileScreen;
