'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';

var Colors = require('../Colors')

class ImprovedTextInput  extends Component{
  render() {
    return(
      <TextInput 
        style={styles.textInput} 
        value={this.props.value} 
        onChangeText={this.props.onChangeText}
        placeholder={this.props.placeholder}
        placeholderTextColor='red'
        secureTextEntry={this.props.secureTextEntry||false}
      />
    );
  }
};

var styles=StyleSheet.create({
  textInput : {
    height: 50,
    padding: 4,
    marginRight: 5,
    marginLeft: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    textAlign: 'center'
  }
});

module.exports=ImprovedTextInput;
