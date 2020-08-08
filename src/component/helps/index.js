import React from 'react';
import { View, Image, ScrollView, Platform, Dimensions, Modal, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import {  Header, Left, Body, Right, Button, Icon, Title, Content,Text, Container, Fab, Card, CardItem, Thumbnail ,Form, Picker, DatePicker, Input  } from 'native-base';

import TitleHeader from './TitleHeader';
import TitleNote from './TitleNote';


const TODAY = new Date(); 
const { width, height } = Dimensions.get("window");

const data = [
    {
        header:'شريحة العملاء',
        text1:'قم بادراج اعمل 3 شرائح من عملائك',
        text2:'بالاخص التي توفر اغلب الايرادات',
        buttonText1:'1',
        buttonText2:'2',
        buttonText3:'3',

    },
    {
        header:'اين تكمن الفيمة؟',
        text1:'اشرح باختصار فكرتك وايش تقدم من حلول',
        text2:'وليش تعتبر مهمة و مفيدة لشريحة العملاء',
        buttonText1:'1',
        buttonText2:'2',
        buttonText3:'3',

    },
    {
        header:'مصادر الدخل',
        text1:'اذكر مصادر الدخل الرئيسية لمشروعك.',
        text2:'حتي وان كنت تقدم الخدمة ببلاش اذكرها بعد.',
        buttonText1:'1',
        buttonText2:'2',
        buttonText3:'3',

    },
    {
        header:'قنوات التواصل والبيع',
        text1:'كيف تتواصل مع معاك؟ كيف تقدم عرض القيمة؟',
        text2:'',
        buttonText1:'1',
        buttonText2:'2',
        buttonText3:'3',

    },
    {
        header:'علاقات العملاء',
        text1:'',
        text2:'',
        buttonText1:'كيف سيكون ظهورك',
        buttonText2:'كيف ستحافظ علي هذا الظهور مع العملاء',
        buttonText3:'3',

    },
    {
        header:'قنوات التواصل والبيع',
        text1:'كيف تتواصل مع معاك؟ كيف تقدم عرض القيمة؟',
        text2:'',
        buttonText1:'1',
        buttonText2:'2',
        buttonText3:'3',

    },
    {
        header:'الأنشطة الرئيسية',
        text1:'كيف تتواصل مع معاك؟ كيف تقدم عرض القيمة؟',
        text2:'',
        buttonText1:'ما الذي تفعله كل يوم لتشغيل نموذج العمل',
        buttonText2:'2',
        buttonText3:'3',

    },
    {
        header:'الموارد الرئيسية',
        text1:'',
        text2:'',
        buttonText1:'الموظفين',
        buttonText2:'الخبرات',
        buttonText3:'راس المال',
    },
    {
        header:'الشركات الرئيسية',
        text1:'اشخاص أو جهات لا يمكنك ممارسة',
        text2:'نموذج العمل دون الإعتماد عليهم',
        buttonText1:'1',
        buttonText2:'2',
        buttonText3:'3',
    },
    {
        header:'الشركات الرئيسية',
        text1:'اشخاص أو جهات لا يمكنك ممارسة',
        text2:'نموذج العمل دون الإعتماد عليهم',
        buttonText1:'1',
        buttonText2:'2',
        buttonText3:'3',
    },

];

 class Helps extends React.Component{
  
  state={
    screen:0
  }

changeScreen = ()=>{
    let screen = this.state.screen;
    let newScreen = screen+1;
    this.setState({
        screen:newScreen
    });
    
}

backScreen = ()=>{
    let screen = this.state.screen;
    let newScreen = screen-1;
    if(newScreen<0){}else{this.setState({screen:newScreen});}
    
}


  render(){
      let i = this.state.screen;
    return(

<Container style={{
    paddingBottom:8,
    paddingTop:0
}}>

  <Content style={{paddingBottom:60}}>     
    <ImageBackground source={require('../assets/background.png')}
                style={{height:245 ,width:width}}
                resizeMode={"contain"}> 
         
    </ImageBackground>   
    <TitleHeader value = { data[i].header} back={this.backScreen} />
    <TitleNote text1={ data[i].text1}  text2={ data[i].text2} />

    <TouchableOpacity>
        <View style={{ 
                flex:1 , 
                justifyContent:'center', 
                alignItems:'center' ,
                height:60, 
                marginTop:20, 
                borderWidth:2, 
                borderRadius:10,
                borderColor:'#00000026', 
                marginLeft:18, 
                marginRight:18,
                shadowColor: "#000000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.25
                }}>
            <Text style={{color:'#9C9C9C', fontSize:18 }} >{ data[i].buttonText1 }</Text>
        </View>
    </TouchableOpacity>

    <TouchableOpacity>
        <View style={{ 
                flex:1 , 
                justifyContent:'center', 
                alignItems:'center' ,
                height:60, 
                marginTop:20, 
                borderWidth:2, 
                borderRadius:10,
                borderColor:'#00000026', 
                marginLeft:18, 
                marginRight:18,
                shadowColor: "#000000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.25
                }}>
            <Text style={{color:'#9C9C9C', fontSize:18 }} >{ data[i].buttonText2 }</Text>
        </View>
    </TouchableOpacity>

    <TouchableOpacity>
        <View style={{ 
                flex:1 , 
                justifyContent:'center', 
                alignItems:'center' ,
                height:60, 
                marginTop:20, 
                borderWidth:2, 
                borderRadius:10,
                borderColor:'#00000026', 
                marginLeft:18, 
                marginRight:18,
                shadowColor: "#000000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.25
                }}>
            <Text style={{color:'#9C9C9C', fontSize:18 }} >{ data[i].buttonText3 }</Text>
        </View>
    </TouchableOpacity>

    </Content>

    <View style={{ flex:.3,flexDirection:'column', justifyContent:'center',alignItems:'center' }}>
        
    <View style={{ flex:1 , justifyContent:'center', alignItems:'center'}}>
    <TouchableOpacity onPress={this.changeScreen}>
        <View style={{ width:160,height:46 ,borderWidth:1,borderRadius:30,borderColor:'#65008DC7', backgroundColor:'#65008DC7', justifyContent:'center',alignItems:'center'}} >
                <Text style={{color:'#FFF', fontWeight:'bold', fontSize:18}}> نيكست</Text>
        </View>
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

   
    </Container>
)}
}



export default Helps;