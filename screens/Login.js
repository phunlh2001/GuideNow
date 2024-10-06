import React, { useState } from 'react'
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import iconLogo from '../assets/blueLogo.png'
import CheckBox from 'react-native-check-box'
import CoreButton from '../components/CoreButton'

export default function Login({ navigation }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isRememberPw, setIsRememberPw] = useState(false)

    const handleLogin = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'DrawerGuide' }]
        })
        if (username === 'nguyen' && password === '2612') {
            navigation.reset({
                index: 0,
                routes: [{ name: 'DrawerGuide' }]
            })
        } else {
            alert('Incorrect username or password')
        }
    }

    return (
        <View style={styles.container}>
            {/* Logo */}
            <View style={styles.boxLogo}>
                <Image source={iconLogo} style={styles.logo} />
                <Text style={styles.logoTitle}>GuideNow</Text>
            </View>

            {/* Title */}
            <View style={styles.boxTitle}>
                <Text style={styles.title}>Have a nice day</Text>
                <Text style={styles.subTitle}>
                    Sign up for the best experience
                </Text>
            </View>

            {/* Username Input */}
            <TextInput
                style={styles.input}
                placeholder="UserName"
                placeholderTextColor="#347E5B"
                value={username}
                onChangeText={setUsername}
            />

            {/* Password Input */}
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                placeholderTextColor="#347E5B"
                value={password}
                onChangeText={setPassword}
            />

            <View style={styles.forgetBox}>
                <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    onClick={() => {
                        setIsRememberPw((state) => !state)
                    }}
                    isChecked={isRememberPw}
                    rightText={'Remember password'}
                />
                <TouchableOpacity>
                    <Text style={styles.btnFotget}>Forget password?</Text>
                </TouchableOpacity>
            </View>

            {/* Login Button */}
            <View style={{ width: 300, alignSelf: 'center', marginBottom: 10 }}>
                <CoreButton callBack={handleLogin} title={'Login'} />
            </View>

            <View style={styles.moveRegister}>
                <Text style={styles.moveText}>You don't have account?</Text>
                <TouchableOpacity
                    style={styles.spaceMove}
                    onPress={() => navigation.navigate('register')}
                >
                    <Text style={styles.textSpaceMove}>Sign Up</Text>
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
        paddingTop: 60,
        paddingBottom: 30,
    },
    boxLogo: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
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
    forgetBox: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btnFotget: {
        fontSize: 16,
    },
    boxTitle: {
        width: '100%',
        flexDirection: 'column',
        marginBottom: 20,
        alignItems: 'center',
    },
    subTitle: {
        fontSize: 15,
        color: '#A9A9A9',
    },
})
