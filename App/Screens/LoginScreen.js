'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

var Title = require('../Components/Title');
var Label = require('../Components/Label');
var TextInput = require('../Components/TextInput');
var Button = require('../Components/Button');

class LoginScreen extends Component{
  render() {
    return(
      <View>
        <Title title='Login' /> 
        <Label text='User Name' placeholder='Chumma'/>
        <TextInput />
        <Label text='Password' />
        <TextInput secureTextEntry={true}/>
        <Button text='SUBMIT' onPress={this.onSubmit} />
      </View>
    );
  }
};

var styles=StyleSheet.create({

});

module.exports=LoginScreen;
