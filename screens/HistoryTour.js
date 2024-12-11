import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import BackTitleList from '../components/BackTitleList'
import COLORS from '../constants/color'
import HeaderOwnTrip from '../components/HeaderOwnTrip'
import SIZES from '../constants/fontsize'
import { getStorage } from '../utils/storage'
import { convertDate } from '../utils/converter'

const TourCard = ({
    place,
    tourGuide,
    departureDate,
    returnDate,
    location,
    status,
    imageUrl,
}) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardFlex}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
                <View style={styles.infoContainer}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Text style={styles.label}>Location:</Text>
                        <Text style={styles.value}>{location}</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Text style={styles.label}>Tour Guide:</Text>
                        <Text style={styles.value}>{tourGuide}</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Text style={styles.label}>Departure date:</Text>
                        <Text style={styles.value}>{departureDate}</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Text style={styles.label}>Return date:</Text>
                        <Text style={styles.value}>{returnDate}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>{place}</Text>
                <Text style={styles.statusText}>{status}</Text>
            </View>
        </View>
    )
}

const HistoryTour = ({ navigation }) => {
    const handleBackToHome = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'AfterLogin' }],
        })
    }

    const [dateInfo, setDateInfo] = useState({})

    const getDateInfo = async () => {
        const { data } = await getStorage('dateInfo')
        setDateInfo({ ...data })
    }

    useEffect(() => {
        getDateInfo()
    }, [])

    return (
        <View style={styles.screen}>
            <View style={{ paddingHorizontal: 20, marginVertical: 20 }}>
                <BackTitleList callBack={() => navigation.goBack()} />
                <HeaderOwnTrip title={'History'} />
            </View>
            <ScrollView>
                <TourCard
                    place="Can Tho 1"
                    tourGuide="Tour Guide A"
                    departureDate={convertDate(dateInfo.departureDate)}
                    returnDate={convertDate(dateInfo.returnDate)}
                    location="Can Tho 1"
                    status="COMPLETED"
                    imageUrl="https://statics.vinwonders.com/cho-noi-cai-rang-2_1624262882.jpg"
                />
            </ScrollView>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <TouchableOpacity
                    onPress={handleBackToHome}
                    style={styles.confirmBtn}
                >
                    <Text style={styles.btnText}>Back to Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: 40,
    },
    cardContainer: {
        borderColor: '#4CAF50',
        borderWidth: 2,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginBottom: 20,
        backgroundColor: COLORS.white,
    },
    cardFlex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 120,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    value: {
        fontWeight: 'normal',
    },
    footerContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10,
    },
    statusText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4CAF50',
    },
    confirmBtn: {
        backgroundColor: COLORS.darkGreen,
        width: 150,
        paddingVertical: 7,
        marginBottom: 50,
        borderRadius: 1000,
        alignSelf: 'center',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    btnText: {
        color: COLORS.white,
        fontSize: SIZES.title,
        fontWeight: 'bold',
    },
})

export default HistoryTour
