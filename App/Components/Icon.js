'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

export default class Icon extends Component{
  render() {
    return(
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <Image source={this.props.name}/> 
      </TouchableWithoutFeedback>
    );
  }
};

var styles=StyleSheet.create({

});
