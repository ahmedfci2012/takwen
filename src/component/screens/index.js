import React from 'react';
import {  Dimensions , View} from 'react-native';
import {  Content, Container } from 'native-base';

import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Footer from './Footer';
import ImageGround from './ImageGround';

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
        <ImageGround tab= {this.state.tab }/>

        {this.state.tab == 1 ? <Screen1 /> :null}

        {this.state.tab == 2? <Screen2 /> :null}

        {this.state.tab == 3? <Screen3  navigate_= {this.props.navigate_} /> :null}
  </Content>

  <Footer 
    tab = {this.state.tab} 
    changeTap = {this.changeTap} 
    
  />

</Container>

)}
}



export default Main;