import React from 'react'
import { ImageBackground, Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const SplashScreen = ({navigation}) => {
    return (
        
           <ImageBackground
           source={require('../assets/way3.jpg')}
           style={styles.container}>
               
                   


             <TouchableOpacity 
             onPress={() => navigation.navigate("signin")}
             style={styles.button}>
                <Text style={{ color: "#005DAB", fontWeight: 'bold', textAlign: 'center', fontSize: 20, marginTop: 14 }}>Get Started</Text>
            </TouchableOpacity>
            </ImageBackground> 

       
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
     width: '100%', 
     height: '100%', 
     
    flexDirection:'column',
    justifyContent:'space-around' 
    }, 
    button: {
        width: '60%',
        height: 60,
        borderRadius: 30,
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginTop:480,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 2
    }
})

export default SplashScreen
