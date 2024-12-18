import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CoreButton from '../../../components/CoreButton'
import VertifyCodeInput from '../../../components/VertifyCodeInput'
import { useNavigation } from '@react-navigation/native'
import { verify } from '../../../api/auth'
import { registrationStore } from '../../../mobx/registerStore'
import { error } from '../../../utils/toast'

const VerificationScreen = ({ goNext }) => {
    const [verificationCode, setVerificationCode] = useState('')
    const [code, setCode] = useState('')

    useEffect(() => {
        const triggerCode = async () => {
            try {
                const res = await verify({ email: registrationStore.email })
                setCode(res.data)
            } catch (err) {
                error(err.message)
            }
        }

        triggerCode()
    }, [])

    const handleCodeChange = (code) => {
        setVerificationCode(code)
    }

    const navigation = useNavigation()

    const isCodeValid = verificationCode === code

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                A verification code is sending to your email{' '}
                {registrationStore.email}
            </Text>
            <VertifyCodeInput length={6} onCodeChange={handleCodeChange} />
            <View style={styles.moveRegister}>
                <Text style={styles.moveText}>
                    You have not received it yet??
                </Text>
                <TouchableOpacity
                    style={styles.spaceMove}
                    onPress={() => console.log('resend qr code')}
                >
                    <Text style={styles.textSpaceMove}>Resend</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btn_space}>
                <View style={{ flex: 1 }}>
                    <CoreButton callBack={() => goNext(1)} title={'BACK'} />
                </View>
                <View style={{ flex: 1 }}>
                    <CoreButton
                        callBack={() => navigation.navigate('Photo')}
                        title={'NEXT'}
                        disabled={!isCodeValid}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
        paddingTop: 50,
    },
    title: {
        fontSize: 20,
        marginBottom: 16,
        textAlign: 'center',
        fontWeight: '800',
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
    moveRegister: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5,
        alignItems: 'center',
        marginTop: 25,
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
    btn_space: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 50,
        gap: 50,
        marginTop: 50,
    },
})

export default VerificationScreen
