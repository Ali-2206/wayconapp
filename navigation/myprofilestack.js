import React from 'react'
import Profile from '../components/ProfileStack/profile'

import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()


const MyProfileStack = () => {

    return(
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="profile" component={Profile} />
        </Stack.Navigator>
    )
}

export default MyProfileStack