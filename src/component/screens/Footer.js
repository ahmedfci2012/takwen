import React from 'react';
import { View, Image, ScrollView, Platform, Dimensions, Modal, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import {  Header, Left, Body, Right, Button, Icon, Title, Content,Text, Container, Fab, Card, CardItem, Thumbnail ,Form, Picker, DatePicker, Input  } from 'native-base';

const { width, height } = Dimensions.get("window");

class Footer extends React.Component{
  
    render(){
        return(
            <View style={{ height:82 ,width:width-20,flexDirection:'row', marginRight:10, marginLeft:10,justifyContent:'space-around',alignItems:'center',backgroundColor:'#65008DC7',borderBottomRightRadius:25,borderBottomLeftRadius:25, borderTopEndRadius:37,borderTopLeftRadius:37, paddingLeft:30, paddingRight:30 }}>

            {this.props.tab==4?
                    <TouchableOpacity style={{ flex:1.8 }}>
                        <View style={{  height:44 ,flexDirection:'row', justifyContent:'center',alignItems:'center', borderWidth:1,borderRadius:30 , borderColor:'#65008DC7',backgroundColor:'#FFF'}}>
                            <Text style={{color:'#000000', fontSize:14, paddingLeft:3,paddingRight:3 }}> الرئيسية</Text>
                            <Icon name="user-o" type="FontAwesome"  style={{color:'#7120A0',fontSize:30}}  />
                        </View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={{ flex:1 }} onPress={()=>this.props.changeTap(4)}>
                        <View style={{ flex:1 , flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                            <Icon name="user-o" type="FontAwesome" style={{color:'#FFF',fontSize:30}}  />
                        </View>
                    </TouchableOpacity>
                }
        
                {this.props.tab==3?
                    <TouchableOpacity style={{ flex:1.8 }}>
                        <View style={{  height:44 ,flexDirection:'row', justifyContent:'center',alignItems:'center', borderWidth:1,borderRadius:30 , borderColor:'#65008DC7',backgroundColor:'#FFF'}}>
                            <Text style={{color:'#000000', fontSize:14, paddingLeft:3,paddingRight:3 }}> المساعدة</Text>
                            <Icon  name="earphones-alt" type="SimpleLineIcons" style={{color:'#7120A0',fontSize:30}}  />
                        </View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={{ flex:1 }} onPress={()=>this.props.changeTap(3)}>
                        <View style={{ flex:1 , flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                            <Icon name="earphones-alt" type="SimpleLineIcons" style={{color:'#FFF',fontSize:30}}  />
                        </View>
                    </TouchableOpacity>
                }
        
                 {this.props.tab==2?
                    <TouchableOpacity style={{ flex:1.8 }}>
                        <View style={{  height:44 ,flexDirection:'row', justifyContent:'center',alignItems:'center', borderWidth:1,borderRadius:30 , borderColor:'#65008DC7',backgroundColor:'#FFF'}}>
                            <Text style={{color:'#000000', fontSize:14, paddingLeft:3,paddingRight:3 }}> المشاريع</Text>
                            <Icon name="briefcase" type="SimpleLineIcons" style={{color:'#7120A0',fontSize:28}}  />
                        </View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={{ flex:1 }} onPress={()=>this.props.changeTap(2)} >
                        <View style={{ flex:1 , flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                            <Icon name="briefcase" type="SimpleLineIcons" style={{color:'#FFF',fontSize:28}}  />
                        </View>
                    </TouchableOpacity>
                }
                
                {this.props.tab==1?
                    <TouchableOpacity style={{ flex:1.8 }} >
                        <View style={{  height:44 ,flexDirection:'row', justifyContent:'center',alignItems:'center', borderWidth:1,borderRadius:30 , borderColor:'#65008DC7',backgroundColor:'#FFF'}}>
                            <Text style={{color:'#000000', fontSize:14, paddingLeft:3,paddingRight:3 }}> الرئيسية</Text>
                            <Icon name="home" type="AntDesign"  style={{color:'#7120A0',fontSize:30}}  />
                        </View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={{ flex:1 }} onPress={()=>this.props.changeTap(1)} >
                        <View style={{ flex:1 , flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                            <Icon name="home" type="AntDesign" style={{color:'#FFF',fontSize:30}}  />
                        </View>
                    </TouchableOpacity>
                }
        
                
            </View>
        
           
     )
    }
}



export default Footer;