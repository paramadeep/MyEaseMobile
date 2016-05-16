'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Colors from '../Colors'
class Separator  extends Component{
  render() {
    return(
      <View style={styles.separator} />
    );
  }
};

var styles=StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: Colors.divider,
    flex: 1
  },

});

module.exports=Separator;
