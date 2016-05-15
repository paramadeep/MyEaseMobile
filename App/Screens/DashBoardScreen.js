'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import {
  Title,
  Label,
  TextInput,
  Button,
} from '../Components';

class DashboardScreen extends Component{
  render() {
    return(
      <View>
        <Title text={`Hi ${this.props.data.name}`} /> 
      </View>
    );
  }
};

var styles=StyleSheet.create({

});
module.exports=DashboardScreen;
