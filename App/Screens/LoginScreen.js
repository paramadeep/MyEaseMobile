'use strict';

import React, { Component } from 'react';
import { StyleSheet,View } from 'react-native';

import {
  Title,
  Label,
  TextInput,
  Button,
} from '../Components';

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
