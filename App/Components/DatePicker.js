'use strict';

import React, { Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  DatePickerIOS,
  DatePickerAndroid,
  TextInput,
} from 'react-native';

class DatePicker  extends Component{
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

  renderIosDatePicker(){
    return(
      <DatePickerIOS
        date={this.state.date} 
        mode="date"
        onDateChange={(date)=>this.setState({date: date})}
      />
    );
  }

  showAndroidPicker(){
    DatePickerAndroid.open({date: this.state.date}).then(()=>{}).done
  }

  renderAndroidDatePicker(){
    return(
      <View> 
        <TextInput onFocus={this.showAndroidPicker.bind(this)} editable={false} value={this.state.date.toString() }/>
      </View>
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

module.exports=DatePicker;
