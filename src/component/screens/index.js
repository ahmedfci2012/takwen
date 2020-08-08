import React from 'react';
import { View, Image, ScrollView, Platform, Dimensions, Modal, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import {  Header, Left, Body, Right, Button, Icon, Title, Content,Text, Container, Fab, Card, CardItem, Thumbnail ,Form, Picker, DatePicker, Input  } from 'native-base';

const TODAY = new Date(); 
const { width, height } = Dimensions.get("window");

 class Main extends React.Component{
  
  state={
    tab:1
  }

changeTap = (value)=>{
    this.setState({
        tab:value
    })
}

  render(){
    return(

<Container style={{
    paddingBottom:8,
    paddingTop:0
}}>
  <Content>     
    <ImageBackground source={require('../assets/background.png')}
                style={{height:240 ,width:width}}
                resizeMode={"contain"}> 
                
        <View style={{ flex:1,justifyContent:'center',alignItems:'flex-end',paddingTop:70, paddingLeft:18,paddingRight:18}}>
        <Text style={{fontSize:36, fontWeight:'bold', color:'#000000'}}>اهلا،ً محمد</Text>
        <Text style={{fontSize:18, fontWeight:'300', color:'#000000'}} >تقدر هنا تتابع مشاريعك وتخطط لها</Text>
        </View>

        <View style={{ alignItems:'flex-end',  paddingLeft:18,paddingRight:18}}>
            {this.state.tab != 3?
            <Text style={{fontSize:36, fontWeight:'bold', color:'#000000'}}>المشاريع</Text>:
            <Text style={{fontSize:36, fontWeight:'bold', color:'#000000'}}>تحتاج الي المساعدة؟</Text>
            }
        </View>
    </ImageBackground>   

{this.state.tab==1 ? 
    <View>
    <View style={{ height:84,flexDirection:'row',marginTop:15 }}>

         <View style={{flex:1, justifyContent:'center', alignItems:'center',}}>
            
            <View style={{ height:41,width:41,borderWidth:1, borderColor:'#624A6C',borderRadius:50}}>
                <Icon name="add" type="MaterialIcons" style={{color:'#624A6C',fontSize:38}}  />
                <Text style={{color:'#000000C7', fontWeight:'bold', fontSize:11,textAlign:'center'}}> جديد</Text>
            </View>
            </View>

            <TouchableOpacity style={{flex:3,}}> 
                <View style={{flex:1,paddingLeft:18, paddingRight:18}}> 
            <View style={{
                        flex:1,
                        borderWidth:1,
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

<TouchableOpacity>
    <View style={{paddingLeft:18, paddingRight:18, marginTop:10}}>
    <View style={{
            height:84,
            flex:1,
            flexDirection:'row',
            borderWidth:1,
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
            shadowRadius: 1.00,
            elevation: 1,
        }}>

            <View style={{ flex:1 , justifyContent:'center', alignItems:'center'}}>
                <Image 
                source={require('../assets/man1.png')}
                style={{height:149 ,width:208 , marginBottom:20}}
                resizeMode={"contain"}
                />
            </View>

            <View style={{ flex:1 , justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:24,color:'#FFF',fontWeight:'bold'}}> نموزج العمل </Text>
            </View>

            </View>
     
</View>   
</TouchableOpacity>
 
<TouchableOpacity>
    <View style={{paddingLeft:18, paddingRight:18, marginTop:70, marginBottom:60}}>
        <View style={{
                height:84,
                flex:1,
                flexDirection:'row',
                borderWidth:1,
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
                shadowRadius: 1.00,
                elevation: 1,
            }}>

                

                <View style={{ flex:1 , justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:24,color:'#FFF',fontWeight:'bold'}}> تاسيس الانطلاق </Text>
                </View>


                <View style={{ flex:1 , justifyContent:'center', alignItems:'center'}}>
                    <Image 
                    source={require('../assets/man2.png')}
                    style={{height:149 ,width:208 , marginBottom:20}}
                    resizeMode={"contain"}
                    />
                </View>
                </View>
        
    </View>
 </TouchableOpacity>  
   
</View>
:null}

{this.state.tab==2?
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
:null}

{this.state.tab==3?
<View style={{paddingBottom:60}}>
     
    <TouchableOpacity>
    <View style={{paddingLeft:18, paddingRight:18, marginTop:20}}>
        <View style={{
                height:84,
                flex:1,
                flexDirection:'row',
                borderWidth:3,
                borderRadius:10,
                borderColor:'#FFF',
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

                elevation: 9,

            }}>
                <View style={{ flex:1 , justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:24,color:'#600793',fontWeight:'bold'}}> بدء المحادثة المباشرة الان </Text>
                </View>
            </View>
    </View>
 </TouchableOpacity> 
   
         
<View style={{ flex:1 , justifyContent:'center', alignItems:'center', marginTop:22}}>
    <Text style={{fontSize:36,color:'#000',fontWeight:'bold'}}> الاسئلة الشائعة </Text>
</View>
        

<View style={{paddingLeft:18, paddingRight:18, marginTop:20}}>
        <View style={{
                height:41,
                flex:1,
                flexDirection:'row',
                borderWidth:1,
                borderRadius:10,
                borderColor:'#FFF',
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

                elevation: 9,

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
            borderColor:'#FFF',
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

            elevation: 9,

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
                borderColor:'#FFF',
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

                elevation: 9,

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
            borderColor:'#FFF',
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

            elevation: 9,

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
                borderColor:'#FFF',
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

                elevation: 9,

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
            borderColor:'#FFF',
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

            elevation: 9,

        }}>
            <View style={{ flex:1 , justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:14,color:'#000'}}> كيف اتابع حالة مشروعي؟</Text>
            </View>
        </View>
</View>



</View>
:null}


    </Content>

    <View style={{ height:82 ,width:width-20,flexDirection:'row', marginRight:10, marginLeft:10,justifyContent:'space-around',alignItems:'center',backgroundColor:'#65008DC7',borderBottomRightRadius:25,borderBottomLeftRadius:25, borderTopEndRadius:37,borderTopLeftRadius:37, paddingLeft:30, paddingRight:30 }}>

    {this.state.tab==4?
            <TouchableOpacity style={{ flex:1.8 }}>
                <View style={{  height:44 ,flexDirection:'row', justifyContent:'center',alignItems:'center', borderWidth:1,borderRadius:30 , borderColor:'#65008DC7',backgroundColor:'#FFF'}}>
                    <Text style={{color:'#000000', fontSize:14, paddingLeft:3,paddingRight:3 }}> الرئيسية</Text>
                    <Icon name="user-o" type="FontAwesome"  style={{color:'#7120A0',fontSize:30}}  />
                </View>
            </TouchableOpacity>
            :
            <TouchableOpacity style={{ flex:1 }} onPress={()=>this.changeTap(4)}>
                <View style={{ flex:1 , flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                    <Icon name="user-o" type="FontAwesome" style={{color:'#FFF',fontSize:30}}  />
                </View>
            </TouchableOpacity>
        }

        {this.state.tab==3?
            <TouchableOpacity style={{ flex:1.8 }}>
                <View style={{  height:44 ,flexDirection:'row', justifyContent:'center',alignItems:'center', borderWidth:1,borderRadius:30 , borderColor:'#65008DC7',backgroundColor:'#FFF'}}>
                    <Text style={{color:'#000000', fontSize:14, paddingLeft:3,paddingRight:3 }}> المساعدة</Text>
                    <Icon  name="earphones-alt" type="SimpleLineIcons" style={{color:'#7120A0',fontSize:30}}  />
                </View>
            </TouchableOpacity>
            :
            <TouchableOpacity style={{ flex:1 }} onPress={()=>this.changeTap(3)}>
                <View style={{ flex:1 , flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                    <Icon name="earphones-alt" type="SimpleLineIcons" style={{color:'#FFF',fontSize:30}}  />
                </View>
            </TouchableOpacity>
        }

         {this.state.tab==2?
            <TouchableOpacity style={{ flex:1.8 }}>
                <View style={{  height:44 ,flexDirection:'row', justifyContent:'center',alignItems:'center', borderWidth:1,borderRadius:30 , borderColor:'#65008DC7',backgroundColor:'#FFF'}}>
                    <Text style={{color:'#000000', fontSize:14, paddingLeft:3,paddingRight:3 }}> المشاريع</Text>
                    <Icon name="briefcase" type="SimpleLineIcons" style={{color:'#7120A0',fontSize:28}}  />
                </View>
            </TouchableOpacity>
            :
            <TouchableOpacity style={{ flex:1 }} onPress={()=>this.changeTap(2)} >
                <View style={{ flex:1 , flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                    <Icon name="briefcase" type="SimpleLineIcons" style={{color:'#FFF',fontSize:28}}  />
                </View>
            </TouchableOpacity>
        }
        
        {this.state.tab==1?
            <TouchableOpacity style={{ flex:1.8 }} >
                <View style={{  height:44 ,flexDirection:'row', justifyContent:'center',alignItems:'center', borderWidth:1,borderRadius:30 , borderColor:'#65008DC7',backgroundColor:'#FFF'}}>
                    <Text style={{color:'#000000', fontSize:14, paddingLeft:3,paddingRight:3 }}> الرئيسية</Text>
                    <Icon name="home" type="AntDesign"  style={{color:'#7120A0',fontSize:30}}  />
                </View>
            </TouchableOpacity>
            :
            <TouchableOpacity style={{ flex:1 }} onPress={()=>this.changeTap(1)} >
                <View style={{ flex:1 , flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                    <Icon name="home" type="AntDesign" style={{color:'#FFF',fontSize:30}}  />
                </View>
            </TouchableOpacity>
        }

        
    </View>

   
    </Container>
)}
}



export default Main;