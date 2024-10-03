import { FontAwesome } from '@expo/vector-icons'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Image } from 'react-native-elements'
import BackTitleList from '../components/BackTitleList'
import COLORS from '../constants/color'
import SIZES from '../constants/fontsize'
import Ionicons from 'react-native-vector-icons/Ionicons'

const OwnTripFound = ({ navigation }) => {
    const [departureDate, setDepartureDate] = useState(new Date())
    return (
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
                <BackTitleList callBack={() => navigation.goBack()} />
            </View>

            <View style={{ paddingHorizontal: 20 }}>
                <View style={styles.backgroundHeader}>
                    <Text style={styles.insideBackground}>
                        Found tour guides
                    </Text>
                </View>
            </View>

            <View style={styles.itemContainer}>
                <View style={{ padding: 10, alignSelf: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('OwnTripCombo')}
                    >
                        <Image
                            source={{
                                uri: 'https://i.pinimg.com/564x/9d/4a/49/9d4a49b2b2b9392d3f844c4dbcff52d6.jpg',
                            }}
                            style={{
                                width: 250,
                                height: 250,
                                borderRadius: 1000,
                                alignSelf: 'center',
                                objectFit: 'cover',
                            }}
                        />
                        <Text style={styles.headerName}>Name</Text>
                        <View style={styles.ratingContainer}>
                            <View style={styles.rating}>
                                <Text style={styles.ratingText}>5.0</Text>
                                <FontAwesome
                                    name="star"
                                    size={16}
                                    color={COLORS.white}
                                />
                            </View>
                            <Text style={styles.status}>Male</Text>
                            <Text style={styles.status}>Good</Text>
                        </View>
                        <TouchableOpacity
                            style={{ alignSelf: 'center', marginTop: 20 }}
                            onPress={() =>
                                navigation.navigate('TourGuideDetail')
                            }
                        >
                            <Ionicons
                                name="chevron-down"
                                size={30}
                                color={COLORS.darkGreen}
                            />
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ justifyContent: 'flex-end' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('OwnTripSuccess')}
                    style={styles.confirmBtn}
                >
                    <Text style={styles.btnText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OwnTripFound

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flex: 1,
        backgroundColor: COLORS.white,
    },
    backgroundHeader: {
        position: 'relative',
        width: '100%',
        height: 50,
        backgroundColor: COLORS.darkGreen,
        borderRadius: 15,
        elevation: 10,
        marginTop: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    insideBackground: {
        fontWeight: 'bold',
        fontSize: SIZES.h2,
        color: COLORS.white,
        textAlign: 'center',
    },
    fill: {
        fontSize: SIZES.h1,
        color: COLORS.deepGreen,
        marginVertical: 20,
    },
    title: {
        fontWeight: 'bold',
        color: COLORS.black,
        fontSize: SIZES.title,
        marginBottom: 10,
    },
    horizonScroll: {
        height: 150,
        marginTop: 20,
    },
    itemContainer: {
        padding: 20,
        borderRadius: 30,
        shadowColor: COLORS.black,
        shadowOffset: { width: 10, height: 3 },
        backgroundColor: COLORS.white,
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10,
        marginVertical: 40,
        width: '100%',
    },

    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        gap: 10,
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.darkGreen,
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 12,
    },
    ratingText: {
        marginRight: 4,
        color: COLORS.white,
    },
    status: {
        backgroundColor: COLORS.darkGreen,
        color: COLORS.white,
        fontWeight: 'bold',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 12,
    },
    headerName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center',
    },
    confirmBtn: {
        backgroundColor: COLORS.darkGreen,
        width: 130,
        paddingVertical: 7,
        marginBottom: 50,
        borderRadius: 1000,
        alignSelf: 'center',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    btnText: {
        color: COLORS.white,
        fontSize: SIZES.title,
        fontWeight: 'bold',
    },
})
