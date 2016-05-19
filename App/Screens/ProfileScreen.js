'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Title,
  Button,
  FieldValue,
} from '../Components';


export default class ProfileScreen  extends Component{
  handleLeftPress(){
    this.props.navigator.pop();
  }


  render() {
    return(
      <View>
        <Title text='Profile' onLeftPress={this.handleLeftPress.bind(this)}/>
        <FieldValue field='Name' value='Deepak' />
        <FieldValue field='Father name' value='Paramasivam' />
        <FieldValue field='DOB' value='12 Dec 1982' />
      </View>
    );
}
};

var styles=StyleSheet.create({

});
