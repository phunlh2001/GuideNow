import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    TouchableWithoutFeedback,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import COLORS from '../constants/color'
import BackTitleButton from '../components/BackTitleButton'
import SIZES from '../constants/fontsize'
import { storeData } from '../utils/storage'

const EnterPassword = ({ navigation }) => {
    const [oldPassword, setOldPassword] = useState('')
    const [isPasswordVisible, setPasswordVisible] = useState(false)

    const handleNext = async () => {
        await storeData('oldPwd', oldPassword)
        navigation.navigate('ResetPassword')
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <BackTitleButton
                        callBack={() => navigation.goBack()}
                        title={'Change password'}
                    />
                    <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
                        <Text style={styles.label}>Enter current password</Text>
                        <View style={styles.inputContainer}>
                            <FontAwesome
                                name="lock"
                                size={24}
                                color={COLORS.darkGreen}
                                style={styles.icon}
                            />
                            <TextInput
                                style={styles.input}
                                value={oldPassword}
                                onChangeText={setOldPassword}
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
                    </View>
                    <View
                        style={{
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                        }}
                    >
                        <TouchableOpacity
                            onPress={handleNext}
                            style={styles.confirmBtn}
                        >
                            <Text style={styles.btnText}>Next</Text>
                        </TouchableOpacity>
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
        marginVertical: 20,
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
        position: 'absolute',
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

export default EnterPassword
