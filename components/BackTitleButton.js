import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Back from '../assets/back.png'
import { Image } from 'react-native-elements'
import SIZES from '../constants/fontsize'

const BackTitleButton = ({ title, callBack }) => {
    return (
        <View style={styles.flexContainer}>
            <TouchableOpacity onPress={callBack} activeOpacity={0.8}>
                <Image style={styles.back} source={Back} />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default BackTitleButton

const styles = StyleSheet.create({
    back: {
        width: 30,
        height: 30
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: SIZES.heroSection,
    }
})