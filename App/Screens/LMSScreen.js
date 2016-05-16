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

class LMSScreen  extends Component{

  handleLeftPress(){
    this.props.navigator.pop()
  }

  addLeave(){
    
  }

  render() {
    return(
     <View>
        <Title text='LMS' onLeftPress={this.handleLeftPress.bind(this)} onAction={this.addLeave}/>
        <FieldValue value='Taken: 10 days' field='Available: 15'/>
      </View>
    );
}
};

var styles=StyleSheet.create({

});

module.exports=LMSScreen;
