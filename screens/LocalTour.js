import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
} from 'react-native'
import React from 'react'
import HomeHeader from '../components/HomeHeader'
import COLORS from '../constants/color'
import { globalData } from '../sampleData/data'
import SIZES from '../constants/fontsize'
import TitleWithButton from '../components/TitleWithButton'
import MyCarousel from '../components/MyCarousel'
import { SIZESCREEN } from '../constants/base'
import LocalTourHeader from '../components/LocalTourHeader'
import { storeData } from '../utils/storage'
const width = Dimensions.get('screen').width / 2 - 50

const LocalTour = ({ navigation }) => {
    const handleNavigateCreateOwnTrip = () => {
        navigation.navigate('OwnTripCreate')
    }

    const navigateToHottrending = () => {
        navigation.navigate('HotTrending')
    }

    const handlePress = async (id, name) => {
        await storeData('tourObj', { id, name })
        navigation.navigate('OwnTripFill')
    }

    return (
        <View style={styles.container}>
            <HomeHeader />
            <LocalTourHeader />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                    <TitleWithButton
                        title={'Create your own trip'}
                        callBack={handleNavigateCreateOwnTrip}
                    />
                </View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.horizonScroll}
                >
                    {globalData.map((item, index) => (
                        <TouchableOpacity
                            onPress={() => handlePress(item.id, item.title)}
                            key={index}
                            style={styles.itemScroll}
                            activeOpacity={0.8}
                        >
                            <ImageBackground
                                source={{ uri: `${item.url}` }}
                                resizeMode="cover"
                                style={styles.image}
                            >
                                <View
                                    style={{
                                        padding: 10,
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        backgroundColor: 'rgba(0,0,0, 0.3)',
                                    }}
                                >
                                    <Text
                                        style={{
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                            fontSize: SIZES.title,
                                            color: COLORS.white,
                                        }}
                                    >
                                        {item.title}
                                    </Text>
                                    <Text
                                        numberOfLines={3}
                                        style={{ color: COLORS.white }}
                                    >
                                        {item.des}
                                    </Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                    <TitleWithButton
                        title={'Hot trend tour'}
                        callBack={navigateToHottrending}
                    />
                </View>
                <View style={{ paddingBottom: 100 }}>
                    <MyCarousel
                        data={globalData}
                        sizeScreen={SIZESCREEN.FULL}
                        border={false}
                        isShowText={false}
                        callBack={() => navigation.navigate('OwnTripCombo')}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default LocalTour

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        backgroundColor: COLORS.white,
        flex: 1,
    },
    horizonScroll: {
        height: 300,
        marginTop: 20,
    },
    itemScroll: {
        height: '100%',
        width,
        marginRight: 10,
        elevation: 5,
        borderRadius: 10,
    },
    image: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
    },
})
