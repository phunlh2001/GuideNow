import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect, useState } from 'react'
import {
    Dimensions,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeHeader from '../components/HomeHeader'
import MyCarousel from '../components/MyCarousel'
import TitleWithButton from '../components/TitleWithButton'
import { SIZESCREEN } from '../constants/base'
import COLORS from '../constants/color'
import SIZES from '../constants/fontsize'
import { attractiveOfferData, globalData } from '../sampleData/data'
import { getStorage, storeData } from '../utils/storage'

const width = Dimensions.get('screen').width / 2 - 30

const HomePage = () => {
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
    }, [])

    const navigation = useNavigation()

    const navigateToOffer = () => {
        navigation.navigate('Offer')
    }

    const handlePress = async (id, name) => {
        await storeData('tourObj', { id, name })
        navigation.navigate('OwnTripFill')
    }

    const Card = ({ items }) => {
        return (
            <View style={styles.displayAttrac}>
                {items.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handlePress(item.id, item.title)}
                    >
                        <View style={styles.card}>
                            <ImageBackground
                                source={{ uri: `${item.url}` }}
                                resizeMode="cover"
                                imageStyle={{ borderRadius: 20 }}
                                style={styles.image}
                            >
                                <View
                                    style={{
                                        width: '100%',
                                        padding: 15,
                                        backgroundColor: 'rgba(0,0,0, 0.3)',
                                        borderBottomLeftRadius: 20,
                                        borderBottomRightRadius: 20,
                                    }}
                                >
                                    <Text style={styles.title}>
                                        {item.title}
                                    </Text>
                                    <Text style={styles.des} numberOfLines={3}>
                                        {item.des}
                                    </Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View>
                <HomeHeader />
                <View style={styles.searchSection}>
                    <LinearGradient
                        // Background Linear Gradient
                        colors={['#509A5A', '#1D795C']}
                        style={styles.background}
                    />
                    <Text style={styles.insideHeader}>
                        Have a nice day, {user.fullName}
                    </Text>
                    <View style={styles.searchHeader}>
                        <Ionicons
                            name="search"
                            color={COLORS.primary}
                            size={20}
                        />
                        <TextInput placeholder="Find your favourite place" />
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                        <TitleWithButton
                            title={'Hot Trending'}
                            isShowButton={false}
                        />
                    </View>
                    <MyCarousel
                        data={globalData}
                        sizeScreen={SIZESCREEN.MIDDLE}
                    />
                    <View
                        style={{
                            paddingHorizontal: 20,
                            marginTop: 30,
                            marginBottom: 300,
                        }}
                    >
                        <TitleWithButton
                            title={'Attractive Offers'}
                            callBack={navigateToOffer}
                        />
                        <Card items={attractiveOfferData} />
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        backgroundColor: COLORS.white,
        flex: 1,
    },
    searchSection: {
        elevation: 10,
        shadowColor: '#3BD655',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        position: 'relative',
    },
    background: {
        height: 130,
    },
    insideHeader: {
        position: 'absolute',
        fontWeight: 'bold',
        top: '20%',
        left: '15%',
        alignSelf: 'flex-start',
        fontSize: SIZES.h3,
        color: COLORS.white,
    },
    searchHeader: {
        position: 'absolute',
        fontWeight: 'bold',
        bottom: 30,
        alignSelf: 'center',
        backgroundColor: COLORS.white,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 10,
        width: '70%',
    },
    card: {
        height: 250,
        width,
        marginTop: 10,
    },
    image: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
    },
    displayAttrac: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
        marginTop: 10,
    },
    title: {
        fontSize: SIZES.title,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: COLORS.white,
    },
    des: {
        fontSize: SIZES.caption,
        color: COLORS.white,
    },
})
