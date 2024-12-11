import React, { useState } from 'react'
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import { forgotPassword } from '../api/auth'
import iconLogo from '../assets/blueLogo.png'
import CoreButton from '../components/CoreButton'
import { error, show } from '../utils/toast'

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState('')

    const handleForgotPwd = async () => {
        try {
            const res = await forgotPassword({ email })
            show(res.message)
            navigation.reset({
                index: 0,
                routes: [{ name: 'login' }],
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
                <Text style={styles.title}>Forgot password</Text>
                <Text style={styles.subTitle}>
                    Get new password with your email
                </Text>
            </View>
            {/* Email Input */}
            <TextInput
                autoCapitalize="none"
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#347E5B"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <View style={{ width: 300, alignSelf: 'center', marginBottom: 10 }}>
                <CoreButton callBack={handleForgotPwd} title={'Confirm'} />
            </View>
            <View style={styles.moveRegister}>
                <Text style={styles.moveText}>Back to login |</Text>
                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                    <Text style={styles.textSpaceMove}>Login</Text>
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
        marginBottom: 20,
        alignItems: 'center',
    },
    subTitle: {
        fontSize: 15,
        color: '#A9A9A9',
    },
})

export default ForgotPassword
