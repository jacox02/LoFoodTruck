import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'
import { ScrollView} from 'react-native-gesture-handler'

export default class Ingediants extends React.Component{
    render() {
        return(
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            >
                <View styles={styles.containerr}>
                    <Image source={require('../images/8.png')}
                    style={styles.img}/>
                    <Text style={{left:60}}>Lechuga</Text>

                </View>
                <View styles={styles.containerr}>
                    <Image source={require('../images/11.png')}
                    style={styles.img}/>
                    <Text style={{left:60}}>Lechuga</Text>

                </View>
                <View styles={styles.containerr}>
                    <Image source={require('../images/12.png')}
                    style={styles.img}/>
                    <Text style={{left:60}}>Lechuga</Text>

                </View>
                <View styles={styles.containerr}>
                    <Image source={require('../images/13.png')}
                    style={styles.img}/>
                    <Text style={{left:60}}>Lechuga</Text>

                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    containerr:{
        width:120,
        height:120,
        backgroundColor:"#ffffff",
        flexDirection:'row',
        paddingVertical:5,
    },
    img:{
        height:80,width:80,
        borderColor:'#ffffff',
        marginLeft:40,
       },
      
       
})