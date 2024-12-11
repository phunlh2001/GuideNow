import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import COLORS from '../constants/color'
import SIZES from '../constants/fontsize'
import BackTitleButton from '../components/BackTitleButton'
import { Keyboard } from 'react-native'
import { error, info } from '../utils/toast'
import { clearStorage, getStorage } from '../utils/storage'
import { changePassword } from '../api/auth'

const ResetPassword = ({ navigation }) => {
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isPasswordVisible, setPasswordVisible] = useState(false)
    const [isConfirmPasswordVisible, setConfirmPasswordVisible] =
        useState(false)

    const handleChange = async () => {
        if (newPassword !== confirmPassword) {
            error('Confirm password not match! Try again')
            return
        }
        try {
            const oldPwd = await getStorage('oldPwd')
            const { data } = await getStorage('account')
            const payload = {
                email: data.email,
                oldPassword: oldPwd.data,
                newPassword: newPassword,
            }

            const res = await changePassword(payload)
            info(res.message)
            await clearStorage('oldPwd')
            navigation.navigate('Profile')
        } catch (err) {
            error(err.message)
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <BackTitleButton
                        callBack={() => navigation.goBack()}
                        title={'Change password'}
                    />
                    <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
                        <Text style={styles.label}>Enter new password</Text>
                        <View style={styles.inputContainer}>
                            <FontAwesome
                                name="lock"
                                size={24}
                                color={COLORS.darkGreen}
                                style={styles.icon}
                            />
                            <TextInput
                                style={styles.input}
                                value={newPassword}
                                onChangeText={setNewPassword}
                                placeholder="PASSWORD"
                                secureTextEntry={!isPasswordVisible}
                            />
                            <TouchableOpacity
                                onPress={() =>
                                    setPasswordVisible(!isPasswordVisible)
                                }
                            >
                                <FontAwesome
                                    name={
                                        isPasswordVisible ? 'eye-slash' : 'eye'
                                    }
                                    size={24}
                                    color={COLORS.darkGreen}
                                />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.label}>Re-enter new password</Text>
                        <View style={styles.inputContainer}>
                            <FontAwesome
                                name="lock"
                                size={24}
                                color={COLORS.darkGreen}
                                style={styles.icon}
                            />
                            <TextInput
                                style={styles.input}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                placeholder="PASSWORD"
                                secureTextEntry={!isConfirmPasswordVisible}
                            />
                            <TouchableOpacity
                                onPress={() =>
                                    setConfirmPasswordVisible(
                                        !isConfirmPasswordVisible,
                                    )
                                }
                            >
                                <FontAwesome
                                    name={
                                        isConfirmPasswordVisible
                                            ? 'eye-slash'
                                            : 'eye'
                                    }
                                    size={24}
                                    color={COLORS.darkGreen}
                                />
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                alignItems: 'flex-end',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <TouchableOpacity
                                onPress={handleChange}
                                style={styles.confirmBtn}
                            >
                                <Text style={styles.btnText}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#D9EDDB',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: COLORS.darkGreen,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
    confirmBtn: {
        backgroundColor: COLORS.darkGreen,
        width: 130,
        paddingVertical: 7,
        marginBottom: 50,
        position: 'absolute',
        bottom: -150,
        borderRadius: 1000,
        alignSelf: 'center',

        justifyContent: 'center',
    },
    btnText: {
        color: COLORS.white,
        fontSize: SIZES.title,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

export default ResetPassword
