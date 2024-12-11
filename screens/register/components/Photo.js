import { FontAwesome } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import Toast from 'react-native-toast-message'
import { register } from '../../../api/auth'
import { renderModal, uploadImage } from '../../../components/ImageHandle'
import COLORS from '../../../constants/color'
import SIZES from '../../../constants/fontsize'
import { registrationStore } from '../../../mobx/registerStore'
import { error, show } from '../../../utils/toast'

const Photo = ({ navigation }) => {
    const [openModal, setOpenModal] = useState(false)
    const [image, setImage] = useState(null)

    const setImageResult = async (preImage) => {
        setOpenModal(false)
        setImage(preImage.assets[0].base64)
    }

    const handleRegister = async () => {
        try {
            const res = await register({
                username: registrationStore.userName,
                password: registrationStore.password,
                fullName: registrationStore.name,
                email: registrationStore.email,
                phoneNumber: registrationStore.phoneNumber,
                birthday: registrationStore.birthday,
            })
            show(res.message)
        } catch (err) {
            error(err.message)
        }
        navigation.navigate('login')
        registrationStore.clearAll()
    }

    return (
        <LinearGradient
            colors={['#3BD655', '#1A9244', '#0F4434']}
            style={styles.container}
        >
            {renderModal(openModal, setOpenModal, uploadImage, setImageResult)}
            <Text style={styles.text}>Choose your avatar</Text>
            <TouchableOpacity onPress={() => setOpenModal(true)}>
                <ImageBackground
                    style={styles.background}
                    source={{ uri: `data:image/png;base64,${image}` }}
                    borderRadius={1000}
                >
                    {!image && (
                        <View
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: 1000,
                                backgroundColor: COLORS.black,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <FontAwesome
                                name="plus"
                                size={24}
                                color={COLORS.white}
                            />
                        </View>
                    )}
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={handleRegister}>
                <Text style={styles.btnText}>Done</Text>
            </TouchableOpacity>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 10,
                }}
            >
                <View style={styles.line}></View>
                <Text style={styles.orText}>Or</Text>
                <View style={styles.line}></View>
            </View>
            <TouchableOpacity onPress={handleRegister}>
                <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default Photo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 40,
        width: '70%',
        textAlign: 'center',
        color: COLORS.white,
    },
    background: {
        width: 300,
        height: 300,
        borderRadius: 10000,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        backgroundColor: '#3C9C6F',
        paddingVertical: 10,
        paddingHorizontal: 70,
        borderRadius: 25,
        marginTop: 40,
    },
    btnText: {
        color: COLORS.white,
        fontSize: SIZES.h3,
        textTransform: 'uppercase',
    },
    orText: {
        color: COLORS.white,
        fontSize: 16,
        marginVertical: 10,
    },
    skipText: {
        color: COLORS.white,
        fontSize: 18,
    },
    line: {
        height: 1,
        backgroundColor: COLORS.white,
        width: 100,
    },
})
