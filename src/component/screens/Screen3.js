import React from 'react';
import { View, Image, ScrollView, Platform, Dimensions, Modal, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import {  Header, Left, Body, Right, Button, Icon, Title, Content,Text, Container, Fab, Card, CardItem, Thumbnail ,Form, Picker, DatePicker, Input  } from 'native-base';

const { width, height } = Dimensions.get("window");

class Screen3 extends React.Component{
  
    render(){
        return(
            <View style={{paddingBottom:60}}>
     
            <TouchableOpacity onPress={()=>this.props.navigate_("Helps")} >
            <View style={{paddingLeft:18, paddingRight:18, marginTop:20}}>
                <View style={{
                        height:height*.10615,
                        flex:1,
                        flexDirection:'row',
                        borderWidth:1,
                        borderRadius:10,
                        borderColor:'#ddd',
                        backgroundColor:'#FFF',
                        justifyContent:'flex-start', 
                        alignItems:'center',
                        shadowColor: "#0000003D",
                        shadowOffset: {
                            width: 0,
                            height: 0,
                        },
                        shadowOpacity: 0.58,
                        shadowRadius: 16.00,
                        elevation: 10
                    }}>
                        <View style={{ flex:1 , justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:24,color:'#600793',fontWeight:'bold'}}> بدء المحادثة المباشرة الان </Text>
                        </View>
                    </View>
            </View>
         </TouchableOpacity> 
           
                 
        <View style={{ flex:1 ,justifyContent:'center', alignItems:'center', marginTop:22}}>
            <Text style={{fontSize:36,color:'#000',fontWeight:'bold'}}> الاسئلة الشائعة </Text>
        </View>
                
        
        <View style={{paddingLeft:18, paddingRight:18, marginTop:20}}>
                <View style={{
                        height:41,
                        flex:1,
                        flexDirection:'row',
                        borderWidth:1,
                        borderRadius:10,
                        borderColor:'#ddd',
                        backgroundColor:'#FFF',
                        justifyContent:'flex-start', 
                        alignItems:'center',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 4,
                        },
                        shadowOpacity: 0.32,
                        shadowRadius: 5.46,
                        elevation:3
        
                    }}>
                        <View style={{ flex:1 , justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:14,color:'#000'}}> كيف اتابع حالة مشروعي؟</Text>
                        </View>
                    </View>
            </View>
        
        <View style={{paddingLeft:18, paddingRight:18, marginTop:20}}>
            <View style={{
                    height:41,
                    flex:1,
                    flexDirection:'row',
                    borderWidth:1,
                    borderRadius:10,
                    borderColor:'#ddd',
                    backgroundColor:'#FFF',
                    justifyContent:'flex-start', 
                    alignItems:'center',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.32,
                    shadowRadius: 5.46,
                    elevation:3
        
                }}>
                    <View style={{ flex:1 , justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize:14,color:'#000'}}> كيف اتابع حالة مشروعي؟</Text>
                    </View>
                </View>
        </View>
        
        <View style={{paddingLeft:18, paddingRight:18, marginTop:20}}>
                <View style={{
                        height:41,
                        flex:1,
                        flexDirection:'row',
                        borderWidth:1,
                        borderRadius:10,
                        borderColor:'#ddd',
                        backgroundColor:'#FFF',
                        justifyContent:'flex-start', 
                        alignItems:'center',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 4,
                        },
                        shadowOpacity: 0.32,
                        shadowRadius: 5.46,
                        elevation:3
        
                    }}>
                        <View style={{ flex:1 , justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:14,color:'#000'}}> كيف اتابع حالة مشروعي؟</Text>
                        </View>
                    </View>
            </View>
        
        <View style={{paddingLeft:18, paddingRight:18, marginTop:20}}>
            <View style={{
                    height:41,
                    flex:1,
                    flexDirection:'row',
                    borderWidth:1,
                    borderRadius:10,
                    borderColor:'#ddd',
                    backgroundColor:'#FFF',
                    justifyContent:'flex-start', 
                    alignItems:'center',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.32,
                    shadowRadius: 5.46,
                    elevation:3
        
                }}>
                    <View style={{ flex:1 , justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize:14,color:'#000'}}> كيف اتابع حالة مشروعي؟</Text>
                    </View>
                </View>
        </View>
        
        <View style={{paddingLeft:18, paddingRight:18, marginTop:20}}>
                <View style={{
                        height:41,
                        flex:1,
                        flexDirection:'row',
                        borderWidth:1,
                        borderRadius:10,
                        borderColor:'#ddd',
                        backgroundColor:'#FFF',
                        justifyContent:'flex-start', 
                        alignItems:'center',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 4,
                        },
                        shadowOpacity: 0.32,
                        shadowRadius: 5.46,
                        elevation:3
        
                    }}>
                        <View style={{ flex:1 , justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:14,color:'#000'}}> كيف اتابع حالة مشروعي؟</Text>
                        </View>
                    </View>
            </View>
       
        
        
        </View>
        
            )
    }
}



export default Screen3;