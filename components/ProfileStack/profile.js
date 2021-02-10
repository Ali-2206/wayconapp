import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context'

const Profile = () => {

    const { SignOut } = React.useContext(AuthContext)

    return (
        <View style={styles.container}>
            <TouchableOpacity
            onPress={() => {SignOut()}}>
                <Icon name="exit" size={30} color="black" />
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Profile
