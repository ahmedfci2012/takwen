import React from 'react';
import { View, Image, ScrollView, Platform, Dimensions, Modal, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import {  Header, Left, Body, Right, Button, Icon, Title, Content,Text, Container, Fab, Card, CardItem, Thumbnail ,Form, Picker, DatePicker, Input  } from 'native-base';

const { width, height } = Dimensions.get("window");

class ImageGround extends React.Component{
  
    render(){
        return(
               
<ImageBackground source={require('../assets/background.png')}
                style={{ width:width, height:height*0.33 , marginTop:height >700 ?-32:-5 }}
                resizeMode={"contain"}  >    
         
  </ImageBackground>
           
     )
    }
}



export default ImageGround;