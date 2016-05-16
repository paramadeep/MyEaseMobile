'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Separator from './Separator'
import Colors from '../Colors'

class FieldValue  extends Component{
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.valueText}>
          {this.props.value}
        </Text>
        <Text style={styles.fieldText}>
          {this.props.field}
        </Text>
        <Separator/>
      </View>
    );
}
};

var styles=StyleSheet.create({
 fieldText:{
  fontSize: 16,
  paddingLeft: 30,
  color: Colors.secondaryText
 },
 valueText:{
  fontSize: 25,
  paddingLeft: 30,
  color: Colors.primaryText
 },
 container: {
 }
});

module.exports=FieldValue;
