'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Separator from './Separator'
import Icon from './Icon'
import Colors from '../Colors'

export default class FieldValue  extends Component{

  renderLeftIcon(){
    var leftIcon = this.props.leftIcon;
    if(leftIcon){
      return(<Icon source={leftIcon}/>);
  }
}

renderRightIcon(){
  var rightIcon = this.props.rightIcon;
  if(rightIcon){
    return(<Icon source={rightIcon}/>);
}
  }

  render() {
    return(
      <View>
        <View style={styles.container}>
          {this.renderLeftIcon()}
          <View style={styles.textContainer}>
            <Text style={styles.valueText}>
              {this.props.value}
            </Text>
            <Text style={styles.fieldText}>
              {this.props.field}
            </Text>
          </View>
          {this.renderRightIcon()}
        </View>
        <Separator/>
      </View>
    );
}
};

var styles=StyleSheet.create({
  fieldText:{
    fontSize: 16,
    paddingLeft: 30,
    color: Colors.secondaryText
  },
  valueText:{
    fontSize: 25,
    paddingLeft: 30,
    color: Colors.primaryText
  },
  textContainer:{ 
  },
  leftIcon: {
    width: 50
  },
  container: {
    flexDirection: 'row'
  }
});
