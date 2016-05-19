'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

import Colors from '../Colors'

export default class Label  extends Component{
  render() {
    return(
      <Text style={styles.label}> 
        {this.props.text}
      </Text>
    );
  }
};

var styles=StyleSheet.create({
  label : {
    color: Colors.primaryText 
  }
});

