import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'
import SIZES from '../constants/fontsize'
import COLORS from '../constants/color'

const TitleWithButton = ({ title, callBack, isShowButton = true }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {isShowButton && (
                <TouchableOpacity style={styles.btn} onPress={callBack}>
                    <Text>
                        All
                    </Text>
                </TouchableOpacity>
            )}
        </View >
    )
}

export default TitleWithButton

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: SIZES.title,
        color: COLORS.black,
        fontWeight: 'bold'
    },
    btn: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderColor: COLORS.primary,
        borderWidth: 1,
        borderRadius: 20
    }
})