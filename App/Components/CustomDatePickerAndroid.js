'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  DatePickerAndroid
} from 'react-native';

export default class CustomDatePickerAndroid  extends Component{
  constructor(props) { 
    super(props); 
    this.state = { 
      date: this.props.date 
    }; 
  }

  handleDateChange(date){
    this.setState({date: date});
    this.props.onDateChange(date);
  } 


  showAndroidPicker(){
    DatePickerAndroid.open({date: this.state.date}).then(this.handleAndroidDateChange.bind(this)).done()
  }

  handleAndroidDateChange(dateResponse){
    if(dateResponse.action !== DatePickerAndroid.dismissedAction){
      this.handleDateChange(new Date(dateResponse.year,dateResponse.month,dateResponse.day))
    }
  }


  getPrintableDate(){
    var date = this.state.date;
    return date.toLocaleDateString()
  }


  render() {
    return(
      <TouchableWithoutFeedback onPress={this.showAndroidPicker.bind(this)} > 
        <FieldValue 
          value={this.getPrintableDate.bind(this)()}
          field={this.props.text}/>
    </TouchableWithoutFeedback>
    );
}
};

var styles=StyleSheet.create({

});

