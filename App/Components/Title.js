'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
} from 'react-native';

import {
  Icon,
} from '../Components';

import  Colors  from '../Colors';
import { 
  GoToLeftIcon,
  GoToRightIcon,
  AddIcon,
  DoneIcon 
} from '../Images';

export default class Title  extends Component{

  renderLeftArrow(){
    var onLeftPress = this.props.onLeftPress;
    if(onLeftPress){
      return (
        <Icon name={GoToLeftIcon} onPress={onLeftPress} /> 
      )
}
  }
  renderRightArrow(){
    var onRightPress = this.props.onRightPress;
    if(onRightPress){
      return (
        <Icon name={GoToRightIcon} onPress={onRightPress} /> 
      )
    }
  }

  renderActionBar(){
    var action = this.props.onAction;
    if(action){
      return (
        <View style={styles.actionRow}>
          <View style={styles.action}>
            <Icon name={AddIcon} onPress={action} /> 
          </View>
        </View>
      )
    }
  }


  render() {
    return(
      <View style={styles.titleBar}>
        <View style={styles.topBar}/> 
        <View style={styles.titleTextRow}>
          <View>{this.renderLeftArrow()}</View>
          <Text style={styles.titleText}>
            {this.props.text}
          </Text>
          <View>{this.renderRightArrow()}</View>
        </View>
        {this.renderActionBar()}
      </View>
    );
}
};

var styles=StyleSheet.create({
  titleBar: {
    marginBottom: 20
  },
  topBar: {
    backgroundColor: Colors.darkPrimary,
    height: 30
  },
  titleTextRow: {
    backgroundColor: Colors.defaultPrimary,
    height: 60,
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
    width: 50,
  },
  rightIcon:{
    width: 50,
  },
  action:{
    borderRadius: 50,
    height: 60,
    width: 60,
    backgroundColor: Colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionRow:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: -30,
    marginRight: 5,
  },
});
