import React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';

class TitleNote extends React.Component{
  
    render(){
        return(
            <View style={{ alignItems:'flex-end',  paddingLeft:18,paddingRight:18, marginBottom:20,marginTop:5 }}>
                <Text style={{fontSize:18, fontWeight:'300', color:'#000000'}}>{this.props.text1}</Text>
                <Text style={{fontSize:18, fontWeight:'300', color:'#000000'}}>{this.props.text2}</Text>
            </View>
        )
    }
}



export default TitleNote;