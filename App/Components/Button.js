'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

var Colors = require('../Colors')

class Button  extends Component{
  render() {
    return(
      <TouchableHighlight style={styles.button}> 
        <Text style={styles.buttonText}>
          {this.props.text}
        </Text>
      </TouchableHighlight>
    );
  }
};

var styles=StyleSheet.create({
  buttonText: {
    fontSize: 18,
    color: Colors.primaryText,
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: Colors.lightPrimary,
    borderColor: Colors.lightPrimary,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    margin: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

module.exports=Button;
