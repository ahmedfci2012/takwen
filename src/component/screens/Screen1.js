import React from 'react';
import { View, Image, ScrollView, Platform, Dimensions, Modal, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import {  Header, Left, Body, Right, Button, Icon, Title, Content,Text, Container, Fab, Card, CardItem, Thumbnail ,Form, Picker, DatePicker, Input  } from 'native-base';

const { width, height } = Dimensions.get("window");

class Screen1 extends React.Component{
  
    render(){
        return(
            <View>
    <View style={{ height:height*.10615,flexDirection:'row',marginTop:15 }}>

         <View style={{flex:1, justifyContent:'center', alignItems:'center',}}>
             
            <View >
                <Icon name="pluscircleo" type="AntDesign" style={{color:'#624A6C', textAlign:'center'}}  />
                <Text style={{color:'#000000C7', fontWeight:'bold', fontSize:11,textAlign:'center'}}> جديد</Text>
            </View>
            </View>  

            <TouchableOpacity style={{flex:3,}}> 
                <View style={{flex:1,paddingLeft:18, paddingRight:18}}> 
            <View style={{
                        flex:1,
                        borderRadius:10,
                        backgroundColor:'#65008DC7',
                        justifyContent:'center', 
                        alignItems:'center',
                        shadowColor: "#000000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.25
            
        }}>
            <Text style={{fontSize:24,color:'#FFF',fontWeight:'bold'}}> متجر اليكتروني </Text>
            </View>
        </View>
            </TouchableOpacity>
    </View>


    <View style={{ flex:1,alignItems:'flex-end',marginTop:40,paddingLeft:18, paddingRight:18}}>
        <Text style={{color:'#000000', fontWeight:'bold', fontSize:36}}>خطط ونفذ</Text>
    </View>


    <View style={{paddingLeft:18, paddingRight:18, marginTop:10, marginBottom:60}}>
    <TouchableOpacity>
       <View style={{
            height:height*.10615,
            flex:1,
            flexDirection:'row',
            borderRadius:10,
            backgroundColor:'#0032B1F3',
            justifyContent:'flex-start', 
            alignItems:'center',
            shadowColor: "#000000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.25,
            shadowRadius: 1.00
        }}>

            <View style={{ flex:.6 , justifyContent:'flex-end', alignItems:'center' }}>
                <Image 
                source={require('../assets/man1.png')}
                style={{height:height*.15629  ,width:width*.4124  }}
                resizeMode={"contain"}
                />
            </View> 

            <View style={{ flex:1 , justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:24,color:'#FFF',fontWeight:'bold'}}> نموزج العمل </Text>
            </View>

            </View>
    </TouchableOpacity>
</View>   
 

    <View style={{paddingLeft:18, paddingRight:18, marginBottom:60}}>
    <TouchableOpacity>
        <View style={{
                height:height*.10615,
                flex:1,
                flexDirection:'row',
                borderRadius:10,
                backgroundColor:'#5C0091',
                justifyContent:'flex-start', 
                alignItems:'center',
                shadowColor: "#000000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.25,
                shadowRadius: 1.00
            }}>

                

                <View style={{ flex:1 , justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:24,color:'#FFF',fontWeight:'bold'}}> تاسيس الانطلاق </Text>
                </View>


                <View style={{ flex:.6 , justifyContent:'flex-end', alignItems:'center' }}>
                    <Image 
                    source={require('../assets/man2.png')}
                    style={{height:height*.15629   ,width:width*.4124   }}
                    resizeMode={"contain"}
                    />
                </View>
                </View>
    </TouchableOpacity>
    </View>
  
   
</View>
        )
    }
}



export default Screen1;