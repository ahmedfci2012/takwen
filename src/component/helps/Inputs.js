import React from 'react';
import { View, Dimensions } from 'react-native';
import { Input  } from 'native-base';

const { width, height } = Dimensions.get("window");

class Inputs extends React.Component{
  
    render(){
         const { data,changeField,i} = this.props;
        return(
        
            <View style={{ flex:1}}>
        
            <Input
                    placeholder={data[i].placeText1}
                    value={data[i].inputText1}
                    onChangeText={changeField("inputText1")}
                    placeholderTextColor="#9C9C9C"
                    autoCorrect={false}
                    style={{
                    textAlign:'center',
                    marginTop:20,
                    marginLeft:18, 
                    marginRight:18,
                    borderWidth: 2,
                    borderColor:'#00000026',
                    borderRadius: 10,
                    height: height*.07031 ,
                    color: "#999999",
                    fontSize: 18,
                    fontWeight:'400',
                    shadowColor: "#000000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.25,
                    
                        
                    }}
            />
    
            <Input
                    placeholder={data[i].placeText2}
                    value={data[i].inputText2}
                    onChangeText={changeField("inputText2")}
                    placeholderTextColor="#9C9C9C"
                    autoCorrect={false}
                    style={{
                    textAlign:'center',
                    marginTop:20,
                    marginLeft:18, 
                    marginRight:18,
                    borderWidth: 2,
                    borderColor:'#00000026',
                    borderRadius: 10,
                    height: height*.07031 ,
                    color: "#999999",
                    fontSize: 18,
                    fontWeight:'400',
                    shadowColor: "#000000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.25
                        
                    }}
            />
    
            <Input
                placeholder={data[i].placeText3}
                value={data[i].inputText3}
                onChangeText={changeField("inputText3")}
                placeholderTextColor="#9C9C9C"
                autoCorrect={false}
                style={{
                    textAlign:'center',
                    marginTop:20,
                    marginLeft:18, 
                    marginRight:18,
                    borderWidth: 2,
                    borderColor:'#00000026',
                    borderRadius: 10,
                    height: height*.07031 ,
                    color: "#999999",
                    fontSize: 18,
                    fontWeight:'400',
                    shadowColor: "#000000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.25
                        
                    }}
            />
        </View>
         
        
     )
    }
}



export default Inputs;