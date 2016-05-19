'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Picker
} from 'react-native';

export default class PickerControl  extends Component{
  renderPickerItems(){
    var pickerItems = [];
    return pickerItems;
  }
  render() {
    return(
      <Picker 
        selectedValue={this.state.language} 
        onValueChange={(lang) => this.setState({language: lang})}> 
        <Picker.Item label="Java" value="java" /> 
        <Picker.Item label="JavaScript" value="js" /> 
      </Picker>

    );
  }
};

var styles=StyleSheet.create({

});
