import React from 'react';
import {  Dimensions , View} from 'react-native';
import {  Content, Container } from 'native-base';

import Helps from '../helps';
import Main from '../screens';
import Done from './Done';

const TODAY = new Date(); 
const { width, height } = Dimensions.get("window");

 class Home extends React.Component{
  
  state={
    navigation_:0
  }


navigate_ = (value)=>{
  if(value == "Main"){
    this.setState({
      navigation_:0
    })
  }else if(value == "Helps"){
    this.setState({
      navigation_:1
    })
  }
}

sendModel = (data)=>{
  // send data 
  // console.log(data);

  this.setState({
    navigation_:2
  })
}

  render(){
    return(
        <View style={{flex:1}}>
        {this.state.navigation_ == 0 ?  
          <Main  
            navigate_={this.navigate_} 
          /> : null }

        {this.state.navigation_ == 1 ?
          <Helps 
            navigate_={this.navigate_} // function 
            sendModel={this.sendModel}
          />
        :null}

        {this.state.navigation_ == 2 ?
          <Done 
            navigate_={this.navigate_} 
          />
        :null}
        
        </View>
)}
}



export default Home;