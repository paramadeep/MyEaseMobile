'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
var Colors = require('../Colors')
class Title  extends Component{
  render() {
    return(
      <View style={styles.titleBar}>
        <View style={styles.topBar}/> 
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>
            {this.props.text}
          </Text>
        </View>
      </View>
    );
}
};

var styles=StyleSheet.create({
  titleBar: {
  },
  topBar: {
    backgroundColor: Colors.darkPrimary,
    height: 30
  },
  titleTextContainer: {
    backgroundColor: Colors.defaultPrimary,
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    color: Colors.textPrimary,
    fontWeight:'bold',
    fontSize: 20
  }
});

module.exports=Title;
