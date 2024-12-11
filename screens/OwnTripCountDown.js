import { LinearGradient } from 'expo-linear-gradient'
import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CoreButton from '../components/CoreButton'
import COLORS from '../constants/color'
import { clearStorage } from '../utils/storage'
import { TouchableOpacity } from 'react-native'

const defaultTime = 600 // 10 mins

const OwnTripCountDown = ({ navigation }) => {
    const [timeLeft, setTimeLeft] = useState(defaultTime)

    const clear = async () => {
        await clearStorage('comboObj')
    }

    const foundTourGuide = () => {
        clear()
        navigation.reset({
            index: 0,
            routes: [{ name: 'OwnTripFound' }],
        })
    }

    useEffect(
        useCallback(() => {
            if (timeLeft > 0) {
                const interval = setInterval(() => {
                    setTimeLeft((prev) => prev - 1)
                }, 1000)
                return () => clearInterval(interval)
            } else if (timeLeft === 0) {
                foundTourGuide()
                setTimeout(() => {
                    setTimeLeft(defaultTime)
                }, 1000)
            }
        }, [timeLeft]),
    )

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`
    }

    return (
        <LinearGradient
            colors={[COLORS.brightGreen, COLORS.deepGreen, COLORS.hunterGreen]}
            style={styles.container}
        >
            <TouchableOpacity onPress={foundTourGuide}>
                <View style={styles.circle}>
                    <Text style={styles.timeText}>{formatTime(timeLeft)}</Text>
                    <Text style={styles.infoText}>
                        Please wait for the process to complete
                    </Text>
                </View>
            </TouchableOpacity>
            <CoreButton
                title="Cancel"
                width="50%"
                callBack={() => navigation.navigate('OwnTripBill')}
            />
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4CAF50',
    },
    circle: {
        width: 250,
        height: 250,
        borderRadius: 125,
        borderWidth: 4,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    timeText: {
        fontSize: 48,
        color: '#fff',
        fontWeight: 'bold',
    },
    infoText: {
        fontSize: 16,
        color: '#fff',
        marginTop: 10,
        textAlign: 'center',
        width: '50%',
    },
})

export default OwnTripCountDown
