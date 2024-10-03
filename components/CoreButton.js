import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const CoreButton = ({ callBack, title, disabled = false }) => {
    return (
        <>
            <TouchableOpacity
                style={[styles.loginButton, disabled && styles.disabledButton]}
                onPress={callBack}
                disabled={disabled}
            >
                <Text
                    style={[
                        styles.loginButtonText,
                        disabled && styles.disabledButtonText,
                    ]}
                >
                    {title}
                </Text>
            </TouchableOpacity>
        </>
    )
}

export default CoreButton

const styles = StyleSheet.create({
    loginButton: {
        backgroundColor: '#347E5B', // Active button color
        paddingVertical: 15,
        borderRadius: 100,
        alignItems: 'center',
        width: '100%',
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    disabledButton: {
        backgroundColor: '#A9A9A9', // Lighter color for disabled state
    },
    disabledButtonText: {
        color: '#E0E0E0', // Lighter text color for disabled state
    },
})
