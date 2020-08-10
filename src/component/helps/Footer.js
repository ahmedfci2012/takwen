import React from 'react';
import { View, Image, ScrollView, Platform, Dimensions, Modal, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import {  Header, Left, Body, Right, Button, Icon, Title, Content,Text, Container, Fab, Card, CardItem, Thumbnail ,Form, Picker, DatePicker, Input  } from 'native-base';

const { width, height } = Dimensions.get("window");

class Footer extends React.Component{
  
    render(){
        const {i , lenght_ } = this.props;
        return(
        
        <View style={{flex:.3}}>

            {i != lenght_-1 ? 
           <View style={{ flex:1,flexDirection:'column', justifyContent:'center',alignItems:'center' }}>
                 
                <View style={{ flex:1 , justifyContent:'center', alignItems:'center'}}>
                <TouchableOpacity onPress={this.props.changeScreen}>
                    
                            { i == lenght_-2 ? 
                            <View style={{ width:200,height:46 ,borderWidth:1,borderRadius:30,borderColor:'#65008DC7', backgroundColor:'#65008DC7', justifyContent:'center',alignItems:'center'}} >
                                <Text style={{color:'#FFF', fontWeight:'bold', fontSize:18}}> معاينة نموزج العمل</Text>
                        </View>

                            :
                            <View style={{ width:160,height:46 ,borderWidth:1,borderRadius:30,borderColor:'#65008DC7', backgroundColor:'#65008DC7', justifyContent:'center',alignItems:'center'}} >

                                <Text style={{color:'#FFF', fontWeight:'bold', fontSize:18}}> نيكست</Text>
                                
                            </View>
                            }
                    </TouchableOpacity>
                </View>
                
                
                <View style={{ flex:1 , justifyContent:'center', alignItems:'center'}}>
                        <Image 
                        source={require('../assets/logotak.png')}
                        style={{height:37 ,width:120 , marginBottom:20}}
                        resizeMode={"contain"}
                        />
                    </View>
        
            </View>
        :

        
        <View style={{ flex:1 , justifyContent:'center', alignItems:'center'}}>
                        <TouchableOpacity onPress={this.props.sendModel}>
                            <View style={{ width:250,height:46 ,borderWidth:1,borderRadius:30,borderColor:'#65008DC7', backgroundColor:'#65008DC7', justifyContent:'center',alignItems:'center'}} >
                                <Text style={{color:'#FFF', fontWeight:'bold', fontSize:18}}> ازسال النموزج</Text>            
                            </View>
                        </TouchableOpacity>
        </View>
    }

        </View>
         
        
     )
    }
}



export default Footer;