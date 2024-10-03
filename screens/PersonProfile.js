import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import COLORS from '../constants/color';
import HomeHeader from '../components/HomeHeader'
import SIZES from '../constants/fontsize';
import { ScrollView } from 'react-native-gesture-handler';
import { renderModal, uploadImage } from '../components/ImageHandle'

const PersonProfile = ({ navigation }) => {
    const [openModal, setOpenModal] = useState(false)
    const [image, setImage] = useState(null)

    const setImageResult = async (preImage) => {
        setOpenModal(false)
        setImage(preImage.assets[0].base64)
    }
    return (
        <View style={styles.container}>
            {renderModal(openModal, setOpenModal, uploadImage, setImageResult)}
            <HomeHeader />
            <ScrollView style={{ paddingHorizontal: 20 }} showsVerticalScrollIndicator={false}>
                <View style={styles.avatarContainer}>
                    <ImageBackground source={{ uri: `data:image/png;base64,${image}` }} borderRadius={1000} style={styles.avatarCircle}>
                        <TouchableOpacity style={styles.cameraButton} onPress={() => setOpenModal(true)}>
                            <FontAwesome name="camera" size={20} color={COLORS.white} />
                        </TouchableOpacity>
                    </ImageBackground>
                </View>

                <Text style={styles.name}>Nguyen Van A</Text>
                <View style={styles.pointContainer}>
                    <Text style={styles.points}>12345 point</Text>
                </View>


                <View style={styles.infoContainer}>
                    <View style={styles.flexText}>
                        <Text style={styles.infoText}>Full Name: </Text>
                        <Text style={styles.label}>Nguyen van a</Text>
                    </View>
                    <View style={styles.flexText}>
                        <Text style={styles.infoText}>Birthday: </Text>
                        <Text style={styles.label}>Nguyen van a</Text>
                    </View>
                    <View style={styles.flexText}>
                        <Text style={styles.infoText}>Phone Number: </Text>
                        <Text style={styles.label}>0123456789</Text>
                    </View>
                    <View style={styles.flexText}>
                        <Text style={styles.infoText}>Email Address: </Text>
                        <Text style={styles.label}>Email@gmail.com</Text>
                    </View>
                </View>

                <View style={styles.menuContainer}>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: SIZES.heroSection, marginBottom: 10 }}>Your</Text>
                    </View>
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Offer')}>
                        <Text style={styles.menuText}>Offers</Text>
                        <FontAwesome name="chevron-right" size={20} color={COLORS.darkGreen} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('LoginAndSecurity')}>
                        <Text style={styles.menuText}>Login and security</Text>
                        <FontAwesome name="chevron-right" size={20} color={COLORS.darkGreen} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('NotificationSetting')}>
                        <Text style={styles.menuText}>Notification settings</Text>
                        <FontAwesome name="chevron-right" size={20} color={COLORS.darkGreen} />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: SIZES.heroSection }}>Language</Text>
                    <Text style={{ borderWidth: 1, borderColor: COLORS.darkGreen, paddingVertical: 10, paddingHorizontal: 30, borderRadius: 15 }}>English</Text>
                </View>

                <View style={styles.menuContainer}>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: SIZES.heroSection, marginBottom: 10 }}>Support</Text>
                    </View>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text style={styles.menuText}>Help center</Text>
                        <FontAwesome name="chevron-right" size={20} color={COLORS.darkGreen} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('GeneralInfomation')}>
                        <Text style={styles.menuText}>General infomation</Text>
                        <FontAwesome name="chevron-right" size={20} color={COLORS.darkGreen} />
                    </TouchableOpacity>
                </View>

                <Text style={{ textAlign: 'center', paddingBottom: 150, marginTop: 20 }}>Version 24.08.2024.1.2</Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: 30
    },
    avatarContainer: {
        position: 'relative',
        alignItems: 'center',
        marginBottom: 20,
    },
    avatarCircle: {
        width: 120,
        height: 120,
        borderRadius: 10000,
        backgroundColor: COLORS.gray2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameraButton: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: -15,
        backgroundColor: COLORS.darkGreen,
        width: 35,
        height: 35,
        borderRadius: 17.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'center'
    },
    pointContainer: {
        backgroundColor: COLORS.darkGreen,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: 150,
        alignSelf: 'center',
        borderRadius: 20,
        marginBottom: 20
    },
    points: {
        color: COLORS.white,
        fontSize: 18,
        textAlign: 'center'
    },
    infoContainer: {
        width: '100%',
        backgroundColor: COLORS.darkGreen,
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
    },
    flexText: {
        flexDirection: 'row'
    },
    infoText: {
        flex: 1,
        color: COLORS.white,
        fontSize: 16,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    label: {
        color: COLORS.white,
        flex: 1
    },
    menuContainer: {
        width: '100%',
        paddingTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    menuText: {
        fontSize: 18,
        color: COLORS.black,
    },
});

export default PersonProfile;
