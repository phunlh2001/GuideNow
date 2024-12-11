import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Image } from 'react-native-elements'
import Back from '../assets/back.png'
import Ionicons from 'react-native-vector-icons/Ionicons'
import COLORS from '../constants/color'

const BackTitleList = ({ callBack }) => {
    return (
        <View style={styles.flexContainer}>
            <TouchableOpacity onPress={callBack} activeOpacity={0.8}>
                <Image style={styles.back} source={Back} />
            </TouchableOpacity>

            <View style={styles.headerIcon}>
                <TouchableOpacity>
                    <Ionicons name="list" size={35} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BackTitleList

const styles = StyleSheet.create({
    back: {
        width: 30,
        height: 30,
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})
