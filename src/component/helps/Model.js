import React from 'react';
import { View, Dimensions } from 'react-native';
import { Textarea , Text } from 'native-base';

const { width, height } = Dimensions.get("window");

class Inputs extends React.Component{
  
    render(){
         const { data} = this.props;
        return(
            <View style={{flex:1, paddingLeft:40, paddingRight:40}}>
            {data.map( (item, index) =>{
                return (
                    <View key={index} >
                { index != data.length-1 ?
               <View style={{flex:1, alignItems:'flex-end', marginTop:20}}  >
                   <Text style={{fontSize:18, fontWeight:'bold', paddingBottom:10, textAlign:'right'}}>{item.header}</Text>

                   <Text style={{fontSize:18,color:'#0000003D', textAlign:'right'}} >{item.inputText1}</Text>
                   <Text style={{fontSize:18, color:'#0000003D', textAlign:'right' }}>{item.inputText2}</Text>
                   <Text style={{fontSize:18, color:'#0000003D', textAlign:'right'}}>{item.inputText3}</Text>
               </View> 
               
               :null}
               </View>
                )
                
            })}
           
       </View>    
        
     )
    }
}



export default Inputs;