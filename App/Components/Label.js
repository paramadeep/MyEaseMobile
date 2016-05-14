'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

var Colors = require('../Colors')

class Label  extends Component{
  render() {
    return(
      <Text style={styles.label}> 
        {this.props.text}
      </Text>
    );
  }
};

var styles=StyleSheet.create({
  label : {
    color: Colors.primaryText 
  }
});

module.exports=Label;
