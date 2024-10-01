import { useFocusEffect } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import COLORS from '../constants/color';

const OwnTripCountDown = ({ navigation }) => {
    const [timeLeft, setTimeLeft] = useState(3);

    useFocusEffect(
        useCallback(() => {
            if (timeLeft > 0) {
                const interval = setInterval(() => {
                    setTimeLeft(timeLeft - 1);
                }, 1000);
                return () => clearInterval(interval)
            } else if (timeLeft === 0) {
                navigation.navigate('OwnTripFound');
                setTimeout(() => {
                    setTimeLeft(3)
                }, 1000);
            }

        }, [timeLeft]))

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <LinearGradient colors={[COLORS.brightGreen, COLORS.deepGreen, COLORS.hunterGreen]} style={styles.container}>
            <View style={styles.circle}>
                <Text style={styles.timeText}>{formatTime(timeLeft)}</Text>
                <Text style={styles.infoText}>Please wait for the process to complete</Text>
            </View>
        </LinearGradient>
    );
};

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
        width: '50%'
    },
});

export default OwnTripCountDown;
