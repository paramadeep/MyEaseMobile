'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import {
  Title,
} from '../Components';


class BaseScreen extends Component{
  render() {
    return(
      <View>
        <Title text={this.state.title} >

      </View>
    );
  }
};

var styles=StyleSheet.create({

});

module.exports=BaseScreen;
