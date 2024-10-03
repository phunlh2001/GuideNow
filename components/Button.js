import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import SIZES from '../constants/fontsize'
import COLORS from '../constants/color'

export default function Button({
    title,
    colorFrom,
    colorTo,
    textColor,
    onPress,
}) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.btn, styles.btnPrimary]}
            onPress={onPress}
        >
            <LinearGradient
                colors={[colorFrom, colorTo]}
                style={styles.linearGradient}
            >
                <Text style={[styles.btnText, { color: textColor }]}>
                    {title}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        height: 50,
        width: '100%',
        borderRadius: SIZES.radius,
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
    },
    btnPrimary: {
        backgroundColor: COLORS.secondary,
        elevation: 3,
    },
    btnShadow: {
        backgroundColor: COLORS.white,
        elevation: 4,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        marginBottom: 20,
    },
    btnText: {
        fontWeight: '600',
        fontSize: SIZES.base,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    linearGradient: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        borderRadius: 10,
    },
})
