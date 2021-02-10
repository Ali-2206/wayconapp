import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../components/auth/signin'
import SignUp from '../components/auth/signup'
import SplashScreen from '../components/SplashScreen'
import Home from '../components/homestacks/home'


const Stack = createStackNavigator();



const MyStack = () => {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="splashscreen" component={SplashScreen} />
        <Stack.Screen name="signin" component={SignIn} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    );
  }


 

  export default MyStack