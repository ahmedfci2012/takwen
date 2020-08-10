import React from 'react';
import { View, Image, ScrollView, Platform, Dimensions, Modal, TouchableOpacity, ImageBackground, StatusBar , SafeAreaView} from 'react-native';
import {  Header, Left, Body, Right, Button, Icon, Title, Content,Text, Container, Fab, Card, CardItem, Thumbnail ,Form, Picker, DatePicker, Input, Textarea  } from 'native-base';

import TitleHeader from './TitleHeader';
import TitleNote from './TitleNote';
import Footer from './Footer';
import Inputs from './Inputs';
import ImageGround from './ImageGround';
import Areas from './Areas';
import Model from './Model';

const TODAY = new Date(); 
const { width, height } = Dimensions.get("window");


 class Helps extends React.Component{
  
  state={
    screen:0,
    data:[
        {
            inputText1:"",
            inputText2:"",
            inputText3:"",
            header:'شريحة العملاء',
            text1:'قم بادراج اعمل 3 شرائح من عملائك',
            text2:'بالاخص التي توفر اغلب الايرادات',
            placeText1:'1',
            placeText2:'2',
            placeText3:'3'

        },
        {
            inputText1:"",
            header:'اين تكمن القيمة؟',
            text1:'اشرح باختصار فكرتك وايش تقدم من حلول',
            text2:'وليش تعتبر مهمة و مفيدة لشريحة العملاء',
            placeText1:'شرح الفكرة...'
        },
        {
            inputText1:"",
            inputText2:"",
            inputText3:"",
            header:'مصادر الدخل',
            text1:'اذكر مصادر الدخل الرئيسية لمشروعك.',
            text2:'حتي وان كنت تقدم الخدمة ببلاش اذكرها بعد.',
            placeText1:'1',
            placeText2:'2',
            placeText3:'3'
        },
        {
            inputText1:"",
            inputText2:"",
            inputText3:"",
            header:'قنوات التواصل والبيع',
            text1:'كيف تتواصل مع معاك؟ كيف تقدم عرض القيمة؟',
            text2:'',
            placeText1:'1',
            placeText2:'2',
            placeText3:'3'
        },
        {
            inputText1:"",
            inputText2:"",
            inputText3:"",
            header:'علاقات العملاء',
            text1:'',
            text2:'',
            placeText1:'كيف سيكون ظهورك',
            placeText2:'كيف ستحافظ علي هذا الظهور مع العملاء',
            placeText3:'3'
        },
        {
            inputText1:"",
            inputText2:"",
            inputText3:"",
            header:'قنوات التواصل والبيع',
            text1:'كيف تتواصل مع معاك؟ كيف تقدم عرض القيمة؟',
            text2:'',
            placeText1:'1',
            placeText2:'2',
            placeText3:'3'
        },
        {
            inputText1:"",
            inputText2:"",
            inputText3:"",
            header:'الأنشطة الرئيسية',
            text1:'كيف تتواصل مع معاك؟ كيف تقدم عرض القيمة؟',
            text2:'',
            placeText1:'ما الذي تفعله كل يوم لتشغيل نموذج العمل',
            placeText2:'2',
            placeText3:'3'
        },
        {
            inputText1:"",
            inputText2:"",
            inputText3:"",
            header:'الموارد الرئيسية',
            text1:'',
            text2:'',
            placeText1:'الموظفين',
            placeText2:'الخبرات',
            placeText3:'راس المال'
        },
        {
            inputText1:"",
            inputText2:"",
            inputText3:"",
            header:'الشركات الرئيسية',
            text1:'اشخاص أو جهات لا يمكنك ممارسة',
            text2:'نموذج العمل دون الإعتماد عليهم',
            placeText1:'1',
            placeText2:'2',
            placeText3:'3'
        },
        {
            inputText1:"",
            inputText2:"",
            inputText3:"",
            header:'الشركات الرئيسية',
            text1:'اشخاص أو جهات لا يمكنك ممارسة',
            text2:'نموذج العمل دون الإعتماد عليهم',
            placeText1:'1',
            placeText2:'2',
            placeText3:'3',
        },
        {
            inputText1:"",
            inputText2:"",
            inputText3:"",
            header:'معاينة نموزج العمل',
            text1:'',
            text2:'',
            placeText1:'',
            placeText2:'',
            placeText3:'',
        }
    
    ]
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
    if(newScreen<0){
        this.props.navigate_("Main");
    }else{
        this.setState({screen:newScreen});
    }
    
}

sendModel = ()=>{
    this.props.sendModel(this.state.data);
}

changeField = name => value => {
    let i = this.state.screen;

    let data = [...this.state.data];

    let dataObj = {...data[i]};

    dataObj[name] = value;
    
    data[i] = dataObj;

    this.setState({
        data
    })

}

  render(){
      
      let i = this.state.screen;
     //let i = 10;
      let { data } = this.state;
  return(

<Container style={{
    paddingBottom:8, 
    paddingTop:0,
}}>

  <Content contentContainerStyle={{paddingBottom:60}}>
    
  <ImageGround />
    
    <TitleHeader value = { data[i].header} back={this.backScreen} />
    <TitleNote text1={ data[i].text1}  text2={ data[i].text2} />

     { i != 1 && i != data.length-1 ?    
        <Inputs 
            data = {data}
            changeField ={ this.changeField}
            i = {this.state.screen}
        />
        : null }

     { i == 1 ? 
        <Areas 
            data = {data}
            changeField ={ this.changeField}
            i = {this.state.screen}
        />
    :null} 

{ i == data.length-1 ? 
       <Model 
       data={data}
       />
    :null} 
 
    </Content>
    
     <Footer 
        changeScreen={this.changeScreen}   
        i = {this.state.screen}
        lenght_= {data.length}
        sendModel = {this.sendModel}
     />

    </Container>
)}
}



export default Helps;






/*
keytool -genkey -v -keystore file.keystore -alias YOUR_ALIAS_NAME -storepass YOUR_ALIAS_PWD -keypass YOUR_ALIAS_PWD -keyalg RSA -validity 36500
keytool -genkey -v -keystore file.keystore -alias takwen -storepass 20120027 -keypass 20120027 -keyalg RSA -validity 36500
*/