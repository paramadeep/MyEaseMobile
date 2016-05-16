'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
} from 'react-native';

import  Colors  from '../Colors'
import Icon from './Icon'
class Title  extends Component{

  renderLeftArrow(){
    var onLeftPress = this.props.onLeftPress;
    if(onLeftPress){
      return (
        <Icon name={require('../Images/chevron_left/icon.png')} onPress={onLeftPress} /> 
      )
}
  }
  renderRightArrow(){
    var onRightPress = this.props.onRightPress;
    if(onRightPress){
      return (
        <Icon name={require('../Images/chevron_right/icon.png')} onPress={onRightPress} /> 
      )
    }
  }


  render() {
    return(
      <View style={styles.titleBar}>
        <View style={styles.topBar}/> 
        <View style={styles.titleTextContainer}>
          <View>{this.renderLeftArrow()}</View>
          <Text style={styles.titleText}>
            {this.props.text}
          </Text>
          <View>{this.renderRightArrow()}</View>
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
    flexDirection: "row",
    justifyContent: "space-between"
  },
  titleText: {
    color: Colors.textPrimary,
    fontWeight:'bold',
    fontSize: 20,
  },
  leftIcon:{
  },
  rightIcon:{
  },
});

module.exports=Title;
