import React, {useState} from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Image, TextInput,ScrollView, ImageBackground } from 'react-native'
import { AuthContext } from '../context'

const SignIn = ({navigation}) => {


    const { SignIn } = React.useContext(AuthContext)


  
    const [user, setUser] = useState();
    const [email, setEmail] = useState();  
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmpassword] = useState();

    return (
        
           <View style={styles.container}>
               <ImageBackground 
               style={styles.pic}
               source={require('../../assets/sinin.png')}> 

              
              <View style={styles.form}>
                    <TextInput
                                    labelValue={user}
                                    placeholder="User Name"
                                    onChangeText={(userUser) => setUser(userUser)}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    style={styles.inputText}
                    />
                    <View
                        style={{
                        borderBottomColor: '#808080',
                        borderBottomWidth: 1,
                        width: '95%',
                        alignSelf: "center"
                        }}
                        opacity={0.5}
                    />
                    <TextInput
                          labelValue={email}
                          placeholder="Email"
                          onChangeText={(userEmail) => setEmail(userEmail)}
                          keyboardType="email-address"
                          autoCapitalize="none"
                          autoCorrect={false}
                          style={styles.inputText2}
                    />
                    <View
                        style={{
                        borderBottomColor: '#808080',
                        borderBottomWidth: 1,
                        width: '95%',
                        alignSelf: "center"
                        }}
                        opacity={0.5}
                    />
                    <TextInput
                        labelValue={password}
                        placeholder="Password"
                        onChangeText={(userPassword) => setPassword(userPassword)}
                        style={styles.inputText2}
                        secureTextEntry={true}
                    />
                                        <View
                        style={{
                        borderBottomColor: '#808080',
                        borderBottomWidth: 1,
                        width: 280,
                        alignSelf: "center"
                        }}
                        opacity={0.5}
                    />
                    <TextInput
                        labelValue={confirmpassword}
                        placeholder="Confirm Password"
                        onChangeText={(userConfirmPassword) => setConfirmpassword(userConfirmPassword)}
                        style={styles.inputText2}
                        secureTextEntry={true}
                    />
                    <View
                        style={{
                        borderBottomColor: '#808080',
                        borderBottomWidth: 1,
                        width: 280,
                        alignSelf: "center"
                        }}
                        opacity={0.5}
                    />
                   

                    

                    <TouchableOpacity
                    style={styles.buttonWrapper}
                    onPress={() => {SignIn()}}
                    >
                        <Text style={styles.buttonText}> Sign In </Text>
                    </TouchableOpacity>


                </View>

</ImageBackground>
           </View>

       
    )
}


const styles = StyleSheet.create({
    container: {
        flex : 1,
       
    },
   pic: {
       width: '100%',
       height: '100%',
       alignSelf: 'center',
       marginTop:8
   },
   form: {
    width: 300,
    alignSelf: 'center',
   
    marginBottom: 330,
    marginTop:200
},
inputText: {
    padding: 10,
},
inputText2: {
    padding: 10,
    marginTop: 30
},
buttonWrapper: {
    backgroundColor: '#0F0264',
    marginTop: 260,
    width: 300,
    borderRadius: 30,
    shadowColor: "#303131",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 2,
},
buttonText: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
    color: "#FFFFFF"
},

})

export default SignIn
