import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const CoreButton = ({ callBack, title, disabled = false, ...props }) => {
    return (
        <>
            <TouchableOpacity
                style={[
                    styles.button,
                    disabled && styles.disabledButton,
                    { ...props },
                ]}
                onPress={callBack}
                disabled={disabled}
            >
                <Text
                    style={[
                        styles.buttonText,
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
    button: {
        backgroundColor: '#347E5B', // Active button color
        paddingVertical: 15,
        borderRadius: 100,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
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
