import React, { useRef, useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const VertifyCodeInput = ({ length = 6, onCodeChange }) => {
    const [code, setCode] = useState(new Array(length).fill(''))
    const inputs = useRef([])

    const handleChange = (text, index) => {
        const newCode = [...code]
        newCode[index] = text
        setCode(newCode)
        onCodeChange(newCode.join('')) // Gửi mã xác nhận hoàn chỉnh qua callback

        if (text && index < length - 1) {
            inputs.current[index + 1].focus()
        }
    }

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
            inputs.current[index - 1].focus()
        }
    }

    return (
        <View style={styles.inputContainer}>
            {code.map((digit, index) => (
                <TextInput
                    key={index}
                    style={styles.input}
                    value={digit}
                    onChangeText={(text) => handleChange(text, index)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                    keyboardType="numeric"
                    maxLength={1}
                    ref={(ref) => (inputs.current[index] = ref)}
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    input: {
        width: 50,
        height: 50,
        borderBottomWidth: 5,
        borderBottomColor: '#1A9244',
        textAlign: 'center',
        fontSize: 24,
        color: '#1A9244',
    },
})

export default VertifyCodeInput
