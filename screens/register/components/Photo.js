import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import SIZES from '../../../constants/fontsize'
import COLORS from '../../../constants/color'
import { FontAwesome } from '@expo/vector-icons';
import { renderModal, uploadImage } from '../../../components/ImageHandle'


const Photo = ({ navigation }) => {
    const [openModal, setOpenModal] = useState(false)
    const [image, setImage] = useState(null)

    const setImageResult = async (preImage) => {
        setOpenModal(false)
        setImage(preImage.assets[0].base64)
    }

    return (
        <LinearGradient colors={['#3BD655', '#1A9244', '#0F4434']} style={styles.container}>
            {renderModal(openModal, setOpenModal, uploadImage, setImageResult)}
            <Text style={styles.text}>Choose your avatar</Text>
            <TouchableOpacity onPress={() => setOpenModal(true)}>
                <ImageBackground style={styles.background} source={{ uri: `data:image/png;base64,${image}` }} borderRadius={1000}>
                    {!image &&
                        <View style={{ width: 30, height: 30, borderRadius: 1000, backgroundColor: COLORS.black, justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesome name="plus" size={24} color={COLORS.white} />
                        </View>
                    }
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('login')}>
                <Text style={styles.btnText}>Done</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                <View style={styles.line}></View>
                <Text style={styles.orText}>Or</Text>
                <View style={styles.line}></View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
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
        gap: 20
    },
    text: {
        fontWeight: 'bold',
        fontSize: 40,
        width: '70%',
        textAlign: "center",
        color: COLORS.white,
    },
    background: {
        width: 300,
        height: 300,
        borderRadius: 10000,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: '#3C9C6F',
        paddingVertical: 10,
        paddingHorizontal: 70,
        borderRadius: 25,
        marginTop: 40
    },
    btnText: {
        color: COLORS.white,
        fontSize: SIZES.h3,
        textTransform: "uppercase"
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
        width: 100
    }
})