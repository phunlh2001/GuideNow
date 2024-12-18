import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react'
import React, { useEffect, useState } from 'react'
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import iconLogo from '../../../assets/blueLogo.png'
import CoreButton from '../../../components/CoreButton'
import COLORS from '../../../constants/color'
import { registrationStore } from '../../../mobx/registerStore'

const CreateAccount = observer(({ goNext }) => {
    const navigation = useNavigation()
    const [isValid, setIsValid] = useState(false)
    const [isPasswordVisible, setPasswordVisible] = useState(false)
    const [isRePasswordVisible, setRePasswordVisible] = useState(false)
    useEffect(() => {
        setIsValid(registrationStore.validateRegister())
    }, [
        registrationStore.userName,
        registrationStore.password,
        registrationStore.rePassword,
    ])

    const handleInputChange = (field, value) => {
        registrationStore.setField(field, value)
    }

    return (
        <ScrollView
            style={{ marginBottom: 100 }}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}>
                <View style={styles.boxLogo}>
                    <Image source={iconLogo} style={styles.logo} />
                    <Text style={styles.logoTitle}>GuideNow</Text>
                </View>

                <View style={styles.boxTitle}>
                    <Text style={styles.title}>Register</Text>
                    <Text style={styles.subTitle}>
                        Please fill in the blanks
                    </Text>
                </View>

                <TextInput
                    autoCapitalize="none"
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#347E5B"
                    value={registrationStore.userName}
                    onChangeText={(text) => handleInputChange('userName', text)}
                />
                {registrationStore.userNameError && (
                    <Text style={styles.errorText}>
                        {registrationStore.userNameError}
                    </Text>
                )}
                <View style={{ position: 'relative' }}>
                    <TextInput
                        autoCapitalize="none"
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={!isPasswordVisible}
                        placeholderTextColor="#347E5B"
                        value={registrationStore.password}
                        onChangeText={(text) =>
                            handleInputChange('password', text)
                        }
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
                {registrationStore.passwordError && (
                    <Text style={styles.errorText}>
                        {registrationStore.passwordError}
                    </Text>
                )}
                <View style={{ position: 'relative' }}>
                    <TextInput
                        autoCapitalize="none"
                        style={styles.input}
                        placeholder="Re-enter password"
                        secureTextEntry={!isRePasswordVisible}
                        placeholderTextColor="#347E5B"
                        value={registrationStore.rePassword}
                        onChangeText={(text) =>
                            handleInputChange('rePassword', text)
                        }
                    />
                    <TouchableOpacity
                        onPress={() =>
                            setRePasswordVisible(!isRePasswordVisible)
                        }
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
                                name={isRePasswordVisible ? 'eye-slash' : 'eye'}
                                size={24}
                                color={COLORS.darkGreen}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                {registrationStore.errors.rePassword && (
                    <Text style={styles.errorText}>
                        {registrationStore.errors.rePassword}
                    </Text>
                )}

                <View style={styles.boxButton}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('login')}
                    >
                        <View style={styles.backButton}>
                            <Ionicons
                                name="caret-back-outline"
                                color="#347E5B"
                                size={32}
                            />
                            <Text style={styles.textSpaceMove}>Back</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: 200, alignSelf: 'center' }}>
                        <CoreButton
                            title={'Continue'}
                            callBack={() => goNext(1)}
                            disabled={!isValid}
                        />
                    </View>
                </View>

                <View style={styles.moveRegister}>
                    <Text style={styles.moveText}>You have an account?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('login')}
                    >
                        <Text style={styles.textSpaceMove}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        gap: 5,
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
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
    },
    boxButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: -10,
        marginBottom: 10,
    },
})
export default CreateAccount
