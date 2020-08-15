import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/component/Home';
// SplashScreen.preventAutoHideAsync();
// SplashScreen.hideAsync();
export default class App extends React.Component{

  

  render(){
    return(
      <Home  /> 
    )
  } 
}