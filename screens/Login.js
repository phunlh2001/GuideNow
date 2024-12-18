import { FontAwesome } from '@expo/vector-icons'
import React, { useState } from 'react'
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import CheckBox from 'react-native-check-box'
import { login } from '../api/auth'
import iconLogo from '../assets/blueLogo.png'
import CoreButton from '../components/CoreButton'
import COLORS from '../constants/color'
import { storeData } from '../utils/storage'
import { error, show } from '../utils/toast'

export default function Login({ navigation }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isRememberPw, setIsRememberPw] = useState(false)
    const [isPasswordVisible, setPasswordVisible] = useState(false)

    const handleLogin = async () => {
        try {
            const res = await login({ username, password })
            await storeData('account', res, isRememberPw)
            show(res.message)
            navigation.reset({
                index: 0,
                routes: [{ name: 'DrawerGuide' }],
            })
        } catch (err) {
            error(err.message)
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
                autoCapitalize="none"
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#347E5B"
                value={username}
                onChangeText={setUsername}
            />

            {/* Password Input */}
            <View style={{ position: 'relative' }}>
                <TextInput
                    autoCapitalize="none"
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#347E5B"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!isPasswordVisible}
                />
                <TouchableOpacity
                    onPress={() => setPasswordVisible(!isPasswordVisible)}
                    style={{
                        position: 'absolute',
                        alignSelf: 'flex-end',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '76%',
                        right: 10,
                    }}
                >
                    <View style={{ alignItems: 'center' }}>
                        <FontAwesome
                            name={isPasswordVisible ? 'eye-slash' : 'eye'}
                            size={24}
                            color={COLORS.darkGreen}
                        />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.forgetBox}>
                <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    onClick={() => {
                        setIsRememberPw((state) => !state)
                    }}
                    isChecked={isRememberPw}
                    rightText={'Remember password'}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('ForgotPassword')}
                >
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
