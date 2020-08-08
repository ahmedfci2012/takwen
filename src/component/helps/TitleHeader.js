import React from 'react';
import { View, Image, ScrollView, Platform, Dimensions, Modal, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import {  Header, Left, Body, Right, Button, Icon, Title, Content,Text, Container, Fab, Card, CardItem, Thumbnail ,Form, Picker, DatePicker, Input  } from 'native-base';

class TitleHeader extends React.Component{
  
    render(){
        return(
            <View  style={{ marginTop:-60, flexDirection:'row',alignItems:'flex-start',  paddingLeft:18,paddingRight:18}}>
                <TouchableOpacity onPress={this.props.back} style={{flex:.5}}  >
                    <View style={{ justifyContent:'center',alignItems:'center' }}> 
                    <Icon name="keyboard-arrow-left" type="MaterialIcons" style={{color:'#5C0091',fontSize:40, textAlign:'center'}} onPress={this.props.back}  />
                    
                    </View>
                </TouchableOpacity>
                <View style={{flex:6, alignItems:'flex-end'}}>
                    <Text style={{fontSize:36, fontWeight:'bold', color:'#000000'}}>{this.props.value}</Text>
                </View>

            </View>
        )
    }
}



export default TitleHeader;