'use strict';

import React, { Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  DatePickerIOS,
  DatePickerAndroid,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';

export default class DatePicker  extends Component{
  constructor(props) { 
    super(props); 
    this.state = { 
      date: this.props.date || new Date() ,
    }; 
  }
  get datePicker() {
    return({
      ios: this.renderIosDatePicker,
      android: this.renderAndroidDatePicker,
    });
  }

  handleDateChange(date){
    this.setState({date: date});
  } 

  renderIosDatePicker(){
    return(
      <DatePickerIOS
        date={this.state.date} 
        mode="date"
        onDateChange={this.handleDateChange.bind(this)}
      />
    );
  }

  getPrintableDate(){
    var date = this.state.date;
    return date.toLocaleDateString()
  }

  handleAndroidDateChange(dateResponse){
    if(dateResponse.action !== DatePickerAndroid.dismissedAction){
      this.handleDateChange(new Date(dateResponse.year,dateResponse.month,dateResponse.day))
    }
  }

  showAndroidPicker(){
    DatePickerAndroid.open({date: this.state.date}).then(this.handleAndroidDateChange.bind(this)).done()
  }

  renderAndroidDatePicker(){
    return(
      <TouchableWithoutFeedback onPress={this.showAndroidPicker.bind(this)} > 
        <Text> {this.getPrintableDate.bind(this)() }</Text>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    return(
      this.datePicker[Platform.OS].bind(this)()
    );
  }
};

var styles=StyleSheet.create({

});
