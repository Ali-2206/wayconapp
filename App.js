import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import SplashScreen from './components/SplashScreen';
import MyStack from './navigation/stack'
import MyTab from './navigation/tab'
import { AuthContext } from './components/context'

const App = () => {


  const [userToken, setUserToken] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(true)


  const authContext = React.useMemo(() => ({
    SignIn: () => {
      setUserToken('fgkj');
      setIsLoading(false);
    },
    SignOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    SignUp: () => {
      setUserToken('fgkj');
      setIsLoading(false);
    },
  }));


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    
  }, [])


  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size= 'large' />
      </View>
    )
  }



  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        { userToken == null ? (
          <MyStack />
        ) : <MyTab />  }
      <StatusBar style="auto" hidden />
    </NavigationContainer>
    </AuthContext.Provider>
    
  
  );
}



export default App
