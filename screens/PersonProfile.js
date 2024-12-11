import { FontAwesome } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import HomeHeader from '../components/HomeHeader'
import { renderModal, uploadImage } from '../components/ImageHandle'
import COLORS from '../constants/color'
import SIZES from '../constants/fontsize'
import { clearStorage, getStorage } from '../utils/storage'
import { info } from '../utils/toast'
import { checkImage } from '../utils/validate'

const PersonProfile = ({ navigation }) => {
    const [openModal, setOpenModal] = useState(false)
    const [image, setImage] = useState(
        'https://i0.wp.com/sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png?ssl=1',
    )
    const [user, setUser] = useState({
        fullName: '',
        email: '',
        birthday: '',
        createAt: '',
        image: '',
        phoneNumber: '',
        username: '',
    })

    const getUserDetail = async () => {
        try {
            const res = await getStorage('account')
            if (res && res.data) {
                setUser(res.data)
            }
        } catch (error) {
            console.log('cannot get user from store', error)
        }
    }

    useEffect(() => {
        getUserDetail()
        setImage(() => user.image)
    }, [])

    const setImageResult = async (preImage) => {
        setOpenModal(false)
        setImage(() => preImage.assets[0].base64)
    }

    const handleLogout = async () => {
        clearStorage('account')
        clearStorage('dateInfo')
        navigation.reset({
            index: 0,
            routes: [{ name: 'login' }],
        })
        info('You are logged out!')
    }

    return (
        <View style={styles.container}>
            {renderModal(openModal, setOpenModal, uploadImage, setImageResult)}
            <HomeHeader />
            <ScrollView
                style={{ paddingHorizontal: 20 }}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.avatarContainer}>
                    <ImageBackground
                        source={{ uri: checkImage(image) }}
                        borderRadius={1000}
                        style={styles.avatarCircle}
                    >
                        <TouchableOpacity
                            style={styles.cameraButton}
                            onPress={() => setOpenModal(true)}
                        >
                            <FontAwesome
                                name="camera"
                                size={20}
                                color={COLORS.white}
                            />
                        </TouchableOpacity>
                    </ImageBackground>
                </View>

                <Text style={styles.name}>{user.username}</Text>
                <View style={styles.pointContainer}>
                    <Text style={styles.points}>0 point</Text>
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.flexText}>
                        <Text style={styles.infoText}>Full Name: </Text>
                        <Text style={styles.label}>{user.fullName}</Text>
                    </View>
                    <View style={styles.flexText}>
                        <Text style={styles.infoText}>Birthday: </Text>
                        <Text style={styles.label}>{user.birthday}</Text>
                    </View>
                    <View style={styles.flexText}>
                        <Text style={styles.infoText}>Phone Number: </Text>
                        <Text style={styles.label}>{user.phoneNumber}</Text>
                    </View>
                    <View style={styles.flexText}>
                        <Text style={styles.infoText}>Email Address: </Text>
                        <Text style={styles.label}>{user.email}</Text>
                    </View>
                </View>

                <View style={styles.menuContainer}>
                    <View>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: SIZES.heroSection,
                                marginBottom: 10,
                            }}
                        >
                            Your
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => navigation.navigate('Offer')}
                    >
                        <Text style={styles.menuText}>Offers</Text>
                        <FontAwesome
                            name="chevron-right"
                            size={20}
                            color={COLORS.darkGreen}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => navigation.navigate('LoginAndSecurity')}
                    >
                        <Text style={styles.menuText}>Login and security</Text>
                        <FontAwesome
                            name="chevron-right"
                            size={20}
                            color={COLORS.darkGreen}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() =>
                            navigation.navigate('NotificationSetting')
                        }
                    >
                        <Text style={styles.menuText}>
                            Notification settings
                        </Text>
                        <FontAwesome
                            name="chevron-right"
                            size={20}
                            color={COLORS.darkGreen}
                        />
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 20,
                    }}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: SIZES.heroSection,
                        }}
                    >
                        Language
                    </Text>
                    <Text
                        style={{
                            borderWidth: 1,
                            borderColor: COLORS.darkGreen,
                            paddingVertical: 10,
                            paddingHorizontal: 30,
                            borderRadius: 15,
                        }}
                    >
                        English
                    </Text>
                </View>

                <View style={styles.menuContainer}>
                    <View>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: SIZES.heroSection,
                                marginBottom: 10,
                            }}
                        >
                            Support
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => navigation.navigate('CSKH')}
                    >
                        <Text style={styles.menuText}>Help center</Text>
                        <FontAwesome
                            name="chevron-right"
                            size={20}
                            color={COLORS.darkGreen}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => navigation.navigate('GeneralInfomation')}
                    >
                        <Text style={styles.menuText}>General infomation</Text>
                        <FontAwesome
                            name="chevron-right"
                            size={20}
                            color={COLORS.darkGreen}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btn} onPress={handleLogout}>
                    <Text style={styles.btnText}>Log out</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: 30,
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
        alignSelf: 'center',
    },
    pointContainer: {
        backgroundColor: COLORS.darkGreen,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: 150,
        alignSelf: 'center',
        borderRadius: 20,
        marginBottom: 20,
    },
    points: {
        color: COLORS.white,
        fontSize: 18,
        textAlign: 'center',
    },
    infoContainer: {
        width: '100%',
        backgroundColor: COLORS.darkGreen,
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
    },
    flexText: {
        flexDirection: 'row',
    },
    infoText: {
        flex: 1,
        color: COLORS.white,
        fontSize: 16,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    label: {
        color: COLORS.white,
        flex: 1,
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
    btn: {
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: COLORS.darkGreen,
        borderRadius: 20,
        marginTop: 40,
        marginBottom: 150,
    },
    btnText: {
        textAlign: 'center',
        fontSize: SIZES.title,
    },
})

export default PersonProfile
