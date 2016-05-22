'use strict';

import React, { Component} from 'react';
import {
  Platform,
  Text,
} from 'react-native';

import { 
  DatePickerIOS, 
  DatePickerAndroid,
} from '../Components';

export default class DatePicker  extends Component{
  constructor(props) { 
    super(props); 
    this.state = { 
      date: this.props.date || new Date() ,
    }; 
  }

  handleDateChange(date){
    this.setState({date: date});
    this.props.onDateChange(date);
  } 

  get datePicker() {
    return({
      ios: DatePickerIOS,
      android: DatePickerAndroid
    });
  }


  render() {
    var PlatformDatePicker = this.datePicker[Platform.OS].bind(this);
    return(
      <PlatformDatePicker 
        date={this.state.date} 
        onDateChange={this.handleDateChange.bind(this)} 
        text={this.props.text}
          />
    );
  }
};
