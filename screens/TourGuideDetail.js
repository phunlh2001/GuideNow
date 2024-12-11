import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import BackTitleList from '../components/BackTitleList'
import COLORS from '../constants/color'
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from 'react-native-elements'
import SIZES from '../constants/fontsize'
import { FontAwesome } from '@expo/vector-icons'
import Ionicons from 'react-native-vector-icons/Ionicons'

const TourGuideDetail = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 20 }}>
                <BackTitleList callBack={() => navigation.goBack()} />
            </View>

            <View
                style={{
                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: 'https://png.pngtree.com/png-vector/20230527/ourmid/pngtree-suitable-for-mobile-apps-web-apps-and-print-media-the-vector-image-of-a-tour-guide-icon-is-available-vector-png-image_52259232.jpg',
                        }}
                        style={styles.image}
                    />
                </View>
                <LinearGradient
                    style={styles.linearBackground}
                    colors={[COLORS.deepGreen, COLORS.jadeGreen]}
                ></LinearGradient>
            </View>
            <View
                style={{
                    marginTop: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text style={{ fontSize: SIZES.h2, fontWeight: 'bold' }}>
                    Tour Guide A
                </Text>
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
            </View>
            <View
                style={{
                    marginTop: 20,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                }}
            >
                <View style={styles.line}></View>
                <Text
                    style={{
                        width: '60%',
                        textAlign: 'center',
                        fontSize: SIZES.body,
                    }}
                >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </Text>
                <View style={styles.line}></View>
            </View>

            <View style={{ paddingHorizontal: 27, marginTop: 40 }}>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginBottom: 20,
                    }}
                >
                    <Text style={styles.title}>Place</Text>
                    <Text style={styles.des}>Ho Chi Minh City</Text>
                </View>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginBottom: 20,
                    }}
                >
                    <Text style={styles.title}>Time</Text>
                    <Text style={styles.des}>
                        05/09/2024 7:00 AM - 10:00 PM
                    </Text>
                </View>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginBottom: 20,
                    }}
                >
                    <Text style={styles.title}>Information</Text>
                    <Text style={styles.des}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Voluptatem consequuntur a quis amet nihil.
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Review')}
                style={{
                    marginTop: 40,
                    alignSelf: 'flex-end',
                    marginRight: 20,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5,
                    justifyContent: 'center',
                }}
            >
                <Text
                    style={{
                        color: COLORS.emeraldGreen,
                        fontWeight: 'bold',
                        fontSize: SIZES.title,
                    }}
                >
                    Review
                </Text>
                <Ionicons
                    name="arrow-forward"
                    size={24}
                    color={COLORS.emeraldGreen}
                />
            </TouchableOpacity>
        </View>
    )
}

export default TourGuideDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: 30,
    },
    linearBackground: {
        height: 150,
        width: '100%',
        marginTop: 20,
        shadowColor: COLORS.darkGreen,
        shadowOffset: { width: 10, height: 3 },
        backgroundColor: COLORS.white,
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 1000,
        alignSelf: 'center',
        objectFit: 'cover',
        borderWidth: 1,
        borderColor: COLORS.white,
    },
    imageContainer: {
        position: 'absolute',
        zIndex: 10,
        bottom: -75,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 20,
        gap: 10,
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.emeraldGreen,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 18,
    },
    ratingText: {
        marginRight: 4,
        fontWeight: 'bold',
        color: COLORS.white,
    },
    status: {
        backgroundColor: COLORS.emeraldGreen,
        color: COLORS.white,
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 18,
    },
    headerName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center',
    },
    line: {
        width: 50,
        borderWidth: 1,
        backgroundColor: COLORS.emeraldGreen,
    },
    title: {
        fontWeight: 'bold',
        width: '30%',
        fontSize: SIZES.base,
    },
    des: {
        width: '70%',
    },
})
