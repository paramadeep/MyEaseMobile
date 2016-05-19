'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import {
  Title,
  Button,
  FieldValue
} from '../Components';
import { AddIcon } from '../Icons';
import { AddLeaveScreen } from '../Screens';

export default class LMSScreen  extends Component{

  handleLeftPress(){
    this.props.navigator.pop()
  }

  addLeave(){
    var route = {
      screen: AddLeaveScreen,
    }
    this.props.navigator.push(route);
  }

  render() {
    return(
      <View>
        <Title text='Leaves' 
          onLeftPress={this.handleLeftPress.bind(this)} 
          onAction={this.addLeave.bind(this)}
          action='add'/>
        <FieldValue value='Taken: 10 days' field='Available: 15 days'/>
      </View>
    );
}
};

var styles=StyleSheet.create({

});
