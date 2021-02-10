import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyHomeStack from './myhomestack'
import MyProfileStack from './myprofilestack'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const MyTab = () => {
  
    return ( 
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person';
            } 
            

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          style:{
            backgroundColor: '#ffffffff',
            borderRadius: 30,
            marginBottom: 20,
            marginLeft: 20,
            width: '90%',
            position: 'absolute',
          }
        }}>
          <Tab.Screen name="Home" component={MyHomeStack} />
          <Tab.Screen name="Profile" component={MyProfileStack} />
        </Tab.Navigator>
    );
  }

  export default MyTab