import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/component/Home';

export default class App extends React.Component{
  render(){
    return(
      <Home  /> 
    )
  } 
}