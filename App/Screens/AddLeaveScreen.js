'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Picker,
  Dimensions,
} from 'react-native';

import {
  Title,
  Button,
  DatePicker,
} from '../Components';

export default class AddLeave extends Component{
  constructor(props) { 
    super(props); 
    this.state = { 
      leaveType: "Casual"
    }; 
  }

  handleLeftPress(){
    this.props.navigator.pop()
  }
  render() {
    return(
      <View>
        <Title text='Add Leave' 
          onLeftPress={this.handleLeftPress.bind(this)}
          onAction={()=>{}} 
          action='done'/>
        <ScrollView style={styles.scroll}>
          <Text>Leave Type</Text>
          <Picker 
            selectedValue={this.state.language} 
            onValueChange={(leaveType) => this.setState({leaveType: leaveType})}> 
            <Picker.Item label="Casual" value="casual" /> 
            <Picker.Item label="Sick" value="sick" /> 
            <Picker.Item label="LOP" value="lop" /> 
          </Picker>
          <DatePicker text='Start Date' 
            date={this.state.startDate} 
            onDateChange={(startDate)=>{this.setState({startDate: startDate})}}
          />
          <DatePicker 
            text='End Date' 
            date={this.props.endDate}
            onDateChange={(endDate)=>{this.setState({endDate: endDate})}}
          />
        </ScrollView>
      </View>
    );
}
};

var styles=StyleSheet.create({
  datePicker:{
    height: 20,
  },
  scroll:{
    flex: 1,
    height: Dimensions.get('window')['height']-70
  }
});
