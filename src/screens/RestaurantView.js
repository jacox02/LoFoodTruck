import React from 'react';
import {View,Text,ScrollView, ImageBackground, Dimensions, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import Product from '../components/Product';

const RestaurantView = () => {
    return (
    <ScrollView
    style={{
        flex: 1,
        backgroundColor:'#ffffff'
    }}
    showsVerticalScrollindicator={false} 
    >
    
    <ImageBackground
    source={require('../images/Background.jpg')}
    style={{
        height: Dimensions.get('window').height / 3.0
    }}
    >
        <View>
        <MaterialIcons style={styles.icon} name="keyboard-arrow-left" size={35} color="white" />
        
        </View>
    </ImageBackground>
  
    <View style={styles.bottomView}>
    
       <View style={{padding:50}}>
       <Text style={{color:'#153E73',fontSize:23, fontWeight:'bold',bottom:15}}>Los goldos</Text>
        <Text style={{color:'#153E73',fontSize:16, fontWeight:'bold'}}>Descripción</Text>
        <Text style={{color:'#153E73',fontSize:12, top:5}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
            invidunt ut labore et dolore magna aliquyam erat.
            </Text>
            <Text style={{color:'#153E73',fontSize:16, fontWeight:'bold', top:10}}>Dirección</Text>
            <Text style={{color:'#153E73',fontSize:12, top:10}}>invidunt ut labore et dolore magna aliquyam erat.</Text>
        </View> 
        <View style={{top:-35}}>
        <Text style={{color:'#153E73',fontSize:16,fontWeight:'bold',paddingLeft:50, bottom:-15}}>Productos</Text>
        <ScrollView style={{left:35}}>
        <Product></Product>
    </ScrollView>
        </View>
    </View>
    
    </ScrollView>
    );
  };
  
  export default RestaurantView;

  const styles = StyleSheet.create({
      bottomView:{
          flex:1.5,
          backgroundColor:'#ffffff',
          bottom:50,
          borderTopStartRadius:60,
          width:'100%',
          
          
      },
      title:{
          color:'#ffffff',
          fontSize:18,
          fontWeight:'bold',
          left:170,
          top:30,
      },
      icon:{
        top:55, 
        left:29,
          
      },
      button: {
        width:233,
        height:63,
        alignItems: 'center',
        padding:20,
        borderRadius:15,
        marginLeft:40,
        marginTop:-15,
      },
      text: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },

  })