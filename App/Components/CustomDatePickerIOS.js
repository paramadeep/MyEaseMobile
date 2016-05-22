'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  DatePickerIOS,
  TouchableWithoutFeedback,
  LayoutAnimation,
} from 'react-native';
import { FieldValue} from '../Components';
import Colors from '../Colors';

export default class CustomDatePickerIOS extends Component{
  constructor(props) { 
    super(props); 
    this.state = { 
      date: this.props.date, 
      datePickerStyle: {
        height: 0
      }
    }; 
  }

  getPrintableDate(){
    var date = this.state.date;
    return date.toLocaleDateString()
  }

  handleDateChange(date){
    this.setState({date: date});
  } 

  toggelPicker(){
    var nextHeight = this.state.datePickerStyle.height === 0 ? 190 : 0;
    this.setState({
      datePickerStyle:{
        height: nextHeight
      }
    })
    if(this.props.date != this.state.date){
      this.props.onDateChange(this.state.date);
    }
  }

  render() {
    return(
      <View>
        <TouchableWithoutFeedback onPress={this.toggelPicker.bind(this)} > 
          <View>
            <FieldValue 
              value={this.getPrintableDate.bind(this)()}
              field={this.props.text}/>
          </View>
        </TouchableWithoutFeedback>
        <DatePickerIOS
          date={this.state.date} 
          mode="date"
          onDateChange={this.handleDateChange.bind(this)}
          style={[styles.datePicker,this.state.datePickerStyle]}
        />
      </View>
    );
}
};

var styles=StyleSheet.create({
  datePicker: {
    overflow: 'hidden',
    alignSelf: 'center',
  }
});

