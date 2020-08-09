import React from 'react';
import { View, Image, ScrollView, Platform, Dimensions, Modal, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import {  Header, Left, Body, Right, Button, Icon, Title, Content,Text, Container, Fab, Card, CardItem, Thumbnail ,Form, Picker, DatePicker, Input  } from 'native-base';

const { width, height } = Dimensions.get("window");

class ImageGround extends React.Component{
  
    render(){
        return(
            <ImageBackground source={require('../assets/background.png')}
            style={{height:height*0.33 ,width:width, marginTop:height >700 ?-32:-5}}
            resizeMode={"contain"}> 
            
    <View style={{ flex:1,justifyContent:'center',alignItems:'flex-end',paddingTop:70, paddingLeft:18,paddingRight:18}}>
    <Text style={{fontSize:36, fontWeight:'bold', color:'#000000'}}>اهلا،ً محمد</Text>
    <Text style={{fontSize:18, fontWeight:'300', color:'#000000'}} >تقدر هنا تتابع مشاريعك وتخطط لها</Text>
    </View>

    <View style={{ alignItems:'flex-end',  paddingLeft:18,paddingRight:18}}>
        {this.props.tab != 3?
        <Text style={{fontSize:36, fontWeight:'bold', color:'#000000'}}>المشاريع</Text>:
        <Text style={{fontSize:36, fontWeight:'bold', color:'#000000'}}>تحتاج الي المساعدة؟</Text>
        }
    </View>
</ImageBackground>   

           
     )
    }
}



export default ImageGround;