'use strict';

import React, { Component } from 'react';
import { StyleSheet,View,Alert } from 'react-native';
import Server from '../Server';
import {
  Title,
  Label,
  TextInput,
  Button,
} from '../Components';

var DashboardScreen = require('./DashboardScreen');
class LoginScreen extends Component{
  constructor(props) { 
    super(props); 
    this.state = { 
      userName: "",
      password: ""
    }; 
  }
  handleLoginSubmit(){
    Server
      .login(this.state.userName,this.state.password)
      .then((user)=>{
        var route = {screen: DashboardScreen,data:user}
        this.props.navigator.push(route)
      })
      .catch((error)=>{
        console.log(error)
        Alert.alert("Login Failed", "Check your credientials")
      })
      .done()
  }

  render() {
    return(
      <View>
        <Title text='Login' /> 
        <Label text='User Name'/>
        <TextInput 
          onChangeText={(value)=>this.setState({userName:value})} 
          value={this.state.userName} />
        <Label text='Password' />
        <TextInput secureTextEntry={true}  
          onChangeText={(value)=>this.setState({password:value})} 
          value={this.state.password}/>
        <Button text='SUBMIT' onPress={this.handleLoginSubmit.bind(this)} />
      </View>
    );
  }
};

var styles=StyleSheet.create({

});

module.exports=LoginScreen;
