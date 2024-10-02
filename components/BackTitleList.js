import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Back from '../assets/back.png'
import { Image } from 'react-native-elements'
import SIZES from '../constants/fontsize'
import Ionicons from 'react-native-vector-icons/Ionicons'
import COLORS from '../constants/color'
import { useNavigation } from '@react-navigation/native'

const BackTitleList = ({ callBack }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.flexContainer}>
            <TouchableOpacity onPress={callBack} activeOpacity={0.8}>
                <Image style={styles.back} source={Back} />
            </TouchableOpacity>

            <View style={styles.headerIcon}>
                <TouchableOpacity >
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
    },
    headerIcon: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "row",
        height: "100%",
        width: 50,
    },
})