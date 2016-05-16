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

class AddLeave extends Component{
  handleLeftPress(){
    this.props.navigator.pop()
  }
  render() {
    return(
      <View>
        <Title text='Add Leave' 
          onLeftPress={this.handleLeftPress.bind(this)}/>

      </View>
    );
  }
};

var styles=StyleSheet.create({

});

module.exports=AddLeave;
