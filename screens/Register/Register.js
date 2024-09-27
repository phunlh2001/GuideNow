import React, { useState } from 'react'
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import iconLogo from '../../assets/blueLogo.png'
import { useNavigation } from '@react-navigation/native'

export default function Register({ onNext }) {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            {/* Logo */}
            <View style={styles.boxLogo}>
                <Image source={iconLogo} style={styles.logo} />
                <Text style={styles.logoTitle}>Guild now</Text>
            </View>

            {/* Title */}
            <View style={styles.boxTitle}>
                <Text style={styles.title}>Register</Text>
                <Text style={styles.subTitle}>Please fill in the blank</Text>
            </View>

            {/* Username Input */}
            <TextInput
                style={styles.input}
                placeholder="UserName"
                placeholderTextColor="#347E5B"
            />

            {/* Password Input */}
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                placeholderTextColor="#347E5B"
            />
            <TextInput
                style={styles.input}
                placeholder="Re-enter password"
                secureTextEntry
                placeholderTextColor="#347E5B"
            />
            {/* Login Button */}
            <TouchableOpacity style={styles.loginButton} onPress={onNext}>
                <Text style={styles.loginButtonText}>Continue</Text>
            </TouchableOpacity>
            <View style={styles.moveRegister}>
                <Text style={styles.moveText}>You have account?</Text>
                <TouchableOpacity
                    style={styles.spaceMove}
                    onPress={() => navigation.navigate('login')}
                >
                    <Text style={styles.textSpaceMove}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        gap: 5,
        paddingTop: 30,
        paddingBottom: 30,
    },
    boxLogo: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        marginBottom: 50,
    },
    logoTitle: {
        color: '#347E5B',
        fontWeight: '500',
        fontSize: 18,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    title: {
        fontSize: 40,
        color: '#347E5B', // Màu xanh dương
        textAlign: 'center',
        fontWeight: '800',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: '#D9EDDB',
        color: '#347E5B',
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        marginRight: 8,
    },
    label: {
        fontSize: 14,
        color: '#333',
    },
    forgotPassword: {
        fontSize: 14,
        color: '#1E90FF', // Màu xanh cho liên kết "Forgot password"
    },
    loginButton: {
        backgroundColor: '#347E5B', // Nền màu xanh cho nút Login
        paddingVertical: 15,
        borderRadius: 100,
        alignItems: 'center',
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    moveRegister: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5,
        alignItems: 'center',
    },
    moveText: {
        fontSize: 15,
        color: '#A9A9A9',
    },
    textSpaceMove: {
        fontSize: 18,
        fontWeight: '800',
        color: '#347E5B',
    },
    boxTitle: {
        width: '100%',
        flexDirection: 'column',
        marginBottom: 80,
        alignItems: 'center',
    },
    subTitle: {
        fontSize: 15,
        color: '#A9A9A9',
    },
})
