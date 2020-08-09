import React from 'react';
import { View, Image, ScrollView, Platform, Dimensions, Modal, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import {  Header, Left, Body, Right, Button, Icon, Title, Content,Text, Container, Fab, Card, CardItem, Thumbnail ,Form, Picker, DatePicker, Input  } from 'native-base';


class Screen2 extends React.Component{
  
    render(){
        return(
            <View>
            <View style={{flex:1,flexDirection:'row' ,alignItems:'center', justifyContent:'flex-end', paddingLeft:20, paddingRight:20, marginTop:10}}>
                
                <View style={{flex:1, marginTop:-50}}>
            <View style={{ height:41,width:41,borderWidth:1, borderColor:'#624A6C',borderRadius:50}}>
                        <Icon name="add" type="MaterialIcons" style={{color:'#624A6C',fontSize:38}}  />
                        <Text style={{color:'#000000C7', fontWeight:'bold', fontSize:11,textAlign:'center'}}> جديد</Text>
                    </View>
                    </View>
        </View>
                <View style={{flex:3,flexDirection:'row' ,alignItems:'center', justifyContent:'flex-end', paddingLeft:20, paddingRight:20}}>
                    <Text style={{paddingRight:5, paddingLeft:8}} >ملغي</Text>
                    <View style={{height:18, width:18, borderRadius:50,borderColor:'#BE2A2A',backgroundColor:'#BE2A2A'}}></View>
                    <Text style={{paddingRight:5, paddingLeft:8}} > معلق</Text>
                    <View style={{height:18, width:18, borderRadius:50,borderColor:'#D0702A',backgroundColor:'#D0702A'}}></View>
                    <Text style={{paddingRight:5, paddingLeft:8}} >تحت التنفيذ</Text>
                    <View style={{height:18, width:18, borderRadius:50,borderColor:'#2AC1C1',backgroundColor:'#2AC1C1'}}></View>
                    <Text style={{paddingRight:5, paddingLeft:8}} >مكتمل</Text>
                    <View style={{height:18, width:18, borderRadius:50,borderColor:'#792A98',backgroundColor:'#792A98'}}></View>
                </View>
                <View style={{flex:1, justifyContent:'center', alignItems:'center',}}>
                    
                    
            </View>
            <TouchableOpacity>
            <View style={{paddingLeft:18, paddingRight:18, marginTop:20}}>
                <View style={{
                        height:84,
                        flex:1,
                        flexDirection:'row',
                        borderWidth:1,
                        borderRadius:10,
                        borderColor:'#65008DC7',
                        backgroundColor:'#65008DC7',
                        justifyContent:'flex-start', 
                        alignItems:'center',
                        shadowColor: "#000000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 1.00,
                    }}>
                        <View style={{ flex:1 , justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:24,color:'#FFF',fontWeight:'bold'}}> متجر الكتروني </Text>
                        </View>
                        </View>
                
            </View>
         </TouchableOpacity> 
         
             <TouchableOpacity>
            <View style={{paddingLeft:18, paddingRight:18, marginTop:20}}>
                <View style={{
                        height:84,
                        flex:1,
                        flexDirection:'row',
                        borderWidth:1,
                        borderRadius:10,
                        borderColor:'#00C1C1C7',
                        backgroundColor:'#00C1C1C7',
                        justifyContent:'flex-start', 
                        alignItems:'center',
                        shadowColor: "#000000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 1.00,
                    }}>
                        <View style={{ flex:1 , justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:24,color:'#FFF',fontWeight:'bold'}}> متجر الكتروني </Text>
                        </View>
                        </View>
                
            </View>
         </TouchableOpacity> 
        
            <TouchableOpacity>
            <View style={{paddingLeft:18, paddingRight:18, marginTop:20}}>
                <View style={{
                        height:84,
                        flex:1,
                        flexDirection:'row',
                        borderWidth:1,
                        borderRadius:10,
                        borderColor:'#BE0000C7',
                        backgroundColor:'#BE0000C7',
                        justifyContent:'flex-start', 
                        alignItems:'center',
                        shadowColor: "#000000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 1.00,
                    }}>
                        <View style={{ flex:1 , justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:24,color:'#FFF',fontWeight:'bold'}}> متجر الكتروني </Text>
                        </View>
                        </View>
                
            </View>
         </TouchableOpacity> 
        
            <TouchableOpacity>
            <View style={{paddingLeft:18, paddingRight:18, marginTop:20, marginBottom:60}}>
                <View style={{
                        height:84,
                        flex:1,
                        flexDirection:'row',
                        borderWidth:1,
                        borderRadius:10,
                        borderColor:'#D55900C7',
                        backgroundColor:'#D55900C7',
                        justifyContent:'flex-start', 
                        alignItems:'center',
                        shadowColor: "#000000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 1.00,
                    }}>
                        <View style={{ flex:1 , justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:24,color:'#FFF',fontWeight:'bold'}}> متجر الكتروني </Text>
                        </View>
                        </View>
                
            </View>
         </TouchableOpacity> 
        
        
        </View>
        
            )
    }
}



export default Screen2;