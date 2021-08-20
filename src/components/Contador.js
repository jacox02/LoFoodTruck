import React from 'react';
import {View,Text} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'

export default class Contador extends React.Component{
    state={
        quantity:1
    }

    addQuantity = (quantity) => {
        this.setState({quantity: this.state.quantity + 1});
    }
    subtractQuantity = (quantity) => {
      if (this.state.quantity > 0) {
        this.setState({quantity: this.state.quantity - 1});
      }
       
    }

    render(){
        return(
            <View style={{
                flexDirection:"row",
                alignSelf:"center",
                alignItems:"center",
                backgroundColor:"#ffff",
                width:100,
                height:30,
                paddingHorizontal:20,
                paddingVertical:8,
                borderRadius:20,
                bordercolor:"#000",
                top:80,
                right:160,
            }}>
                 <TouchableOpacity
                       onPress={this.addQuantity}
                       
                      >
                          <Text style={{
                              fontWeight:"bold",
                              fontSize:18,
                          }}>+</Text>
                      </TouchableOpacity> 
                      
                      <Text style={{
                          fontSize:18,
                          fontWeight:"bold",
                          paddingHorizontal:18
                      }}>
                          {this.state.quantity}
                      </Text>

                      <TouchableOpacity
                       onPress={this.subtractQuantity}
                      >
                          <Text style={{
                              fontWeight:"bold",
                              fontSize:18
                          }}>-</Text>
                      </TouchableOpacity> 
            </View>
        )
    }
}