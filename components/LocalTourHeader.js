import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import SIZES from '../constants/fontsize'
import COLORS from '../constants/color'
import Ionicons from 'react-native-vector-icons/Ionicons'

const LocalTourHeader = ({ isShowText = true }) => {
    return (
        <View>
            <LinearGradient
                // Background Linear Gradient
                colors={["#509A5A", "#1D795C"]}
                style={styles.background}
            />
            <View style={{ position: 'absolute', width: "100%", top: -35 }}>
                <View style={styles.circle}>
                    <Ionicons name='podium' size={40} color={COLORS.pastelGreen} />
                </View>
                {isShowText && (
                    <Text style={styles.insideHeader}>
                        Local Tour
                    </Text>
                )}
            </View>
        </View>
    )
}

export default LocalTourHeader

const styles = StyleSheet.create({
    background: {
        height: 70,
    },
    insideHeader: {
        fontWeight: "bold",
        alignSelf: "center",
        fontSize: SIZES.header,
        color: COLORS.white
    },
    circle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: COLORS.emeraldGreen,
        alignSelf: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.white
    }
})