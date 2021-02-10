import React from 'react'
import Home from '../components/homestacks/home'

import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()


const MyHomeStack = () => {

    return(
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
    )
}

export default MyHomeStack