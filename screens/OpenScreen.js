import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import iconImage from '../assets/whiteLogo.png'

const OpenScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('login')}
                style={styles.actionIcon}
            >
                <Image source={iconImage} style={styles.image} />
                <Text style={styles.text}>GuideNow</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1A9244',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 24,
        marginBottom: 20,
        fontWeight: '800',
    },
    image: {
        width: 100,
        height: 100,
    },
    actionIcon: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default OpenScreen
