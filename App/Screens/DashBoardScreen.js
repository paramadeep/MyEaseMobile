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

class DashboardScreen extends Component{

  gotoProfile(){
    var route = { screen: require('./ProfileScreen')}
    this.props.navigator.push(route);
  }

  gotoLMS(){
    var route = { screen: require('./LMSScreen')}
    this.props.navigator.push(route);
  }

  gotoCompensation(){
    var route = { screen: require('./CompensationScreen')}
    this.props.navigator.push(route);
  }

  gotoPayE(){
    var route = { screen: require('./PayEScreen')}
    this.props.navigator.push(route);
  }

  render() {
    return(
      <View>
        <Title text={`Hi ${this.props.data.name}`} /> 
        <Button text='Profile' onPress={this.gotoProfile.bind(this)}/>
        <Button text='LMS' onPress={this.gotoLMS.bind(this)}/>
        <Button text='Compensation' onPress={this.gotoCompensation.bind(this)}/>
        <Button text='Pay-E' onPress={this.gotoPayE.bind(this)}/>
      </View>
    );
  }
};

var styles=StyleSheet.create({

});
module.exports=DashboardScreen;
