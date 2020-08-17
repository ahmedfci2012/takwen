import React from 'react';
import { View, Dimensions } from 'react-native';
import { Textarea , Text } from 'native-base';
import SkeletonContent from 'react-native-skeleton-content';

const { width, height } = Dimensions.get("window");

class Inputs extends React.Component{
  state = {
      isLoading:true
  }
componentDidMount = ()=>{
    setTimeout(()=>{
        this.setState({
            isLoading:false
        });
   }, 5000);
}
    render(){ 
         const { data} = this.props;
        return(
            <View style={{flex:1, paddingLeft:40, paddingRight:40, marginTop:-50 }}>
            
            
     
     {data.map( (item, index) =>{
                return ( 
                    <View key={index} >
                { index != data.length-1 ?
               <View style={{flex:1, alignItems:'flex-end', marginTop:20}}  >
                   <Text style={{fontSize:18, fontWeight:'bold', paddingBottom:10, textAlign:'right'}}>{item.header}</Text>
                   <SkeletonContent
                        containerStyle={{ flex: 1,alignItems:'flex-end', width: 300 }}
                        isLoading={this.state.isLoading}
                        layout={[
                            { key: 'someOtherId1', width: 205, height: 10, marginBottom: 6,borderRadius:0 },
                            { key: 'someOtherId2', width: 180, height: 10, marginBottom: 6, borderRadius:0 },
                            { key: 'someOtherId3', width: 205, height: 10, marginBottom: 6, borderRadius:0  }
                        ]}
                        boneColor='#E4E4E4'
                        animationDirection='horizontalLeft'
                    >

                   {item.inputText1?<Text style={{fontSize:18,color:'#0000003D', textAlign:'right'}} >{item.inputText1}</Text>:null}
                   {item.inputText2?<Text style={{fontSize:18, color:'#0000003D', textAlign:'right' }}>{item.inputText2}</Text>:null}
                   {item.inputText3?<Text style={{fontSize:18, color:'#0000003D', textAlign:'right'}}>{item.inputText3}</Text>:null}
               </SkeletonContent>
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