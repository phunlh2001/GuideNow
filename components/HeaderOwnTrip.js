import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../constants/color'
import SIZES from '../constants/fontsize'

const HeaderOwnTrip = ({ title }) => {
    return (
        <View>
            <View style={styles.changePlaceButton}>
                <Text style={styles.changePlaceText}>{title}</Text>
            </View>
        </View>
    )
}

export default HeaderOwnTrip

const styles = StyleSheet.create({
    changePlaceButton: {
        backgroundColor: COLORS.darkGreen,
        paddingVertical: 7,
        borderRadius: 10,
        marginTop: 20,
        width: '100%',
        alignSelf: 'center',
        elevation: 10,
        shadowColor: COLORS.darkGreen
    },
    changePlaceText: {
        color: COLORS.white,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: SIZES.h2,
    },
})