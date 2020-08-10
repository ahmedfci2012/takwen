import React from 'react';
import { View, Image, ScrollView, Platform, Dimensions, Modal, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import {  Header, Left, Body, Right, Button, Icon, Title, Content,Text, Container, Fab, Card, CardItem, Thumbnail ,Form, Picker, DatePicker, Input  } from 'native-base';

const { width, height } = Dimensions.get("window");

class Done extends React.Component{
  
    render(){
        return(
            <View style = {{ flex:1 , alignItems:'center', backgroundColor:'#65008DC7'}}>
                
        <Image source={require('../assets/done.png')}
            style={{height:height*0.28 ,width:width, marginTop:height * 0.178}}
            resizeMode={"contain"}
        /> 

        <Text style={{
            fontWeight:'bold',
            fontSize:70,
            color:'#FFF'
        }}>تم</Text>

        <Text style={{
            fontWeight:'normal',
            fontSize:14,
            color:'#FFF',
            textAlign:'center',
            marginTop:40
        }}>
    سيتم مراجعة مشروعك من قبل المتخصصين لدينا وتقديم افضل الحلول
        </Text>

<TouchableOpacity style={{position:'absolute',bottom:height * 0.158}}
  onPress={()=>this.props.navigate_("Main")}
>
        <View style={{
            
            backgroundColor:'#FFF',
            borderRadius:30,
            height:46,
            width:108,
            justifyContent:'center',
            alignItems:'center'
        }}>

            <Text style={{
                color:'#000',
                fontSize:18,
                fontWeight:'normal'
            }}> 
                الرئيسية
            </Text>
        </View>
</TouchableOpacity>
    </View>
        )
    }
}



export default Done;