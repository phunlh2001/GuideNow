import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import BackTitleList from '../components/BackTitleList'
import COLORS from '../constants/color'
import SIZES from '../constants/fontsize'
import { ImageBackground } from 'react-native'
import { globalData } from '../sampleData/data'
import { FontAwesome } from '@expo/vector-icons';

const width = Dimensions.get('screen').width / 2 - 20

const OwnTripChooseCombo = ({ navigation }) => {
    const [departureDate, setDepartureDate] = useState(new Date())
    return (
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
                <BackTitleList callBack={() => navigation.goBack()} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 20 }}>

                    <View style={styles.backgroundHeader}>
                        <Text style={styles.insideBackground}>You’re choosing Can Tho</Text>
                    </View>
                    <Text style={styles.fill}>Please choose a combo you want</Text>
                </View>

                {globalData.map((_, index) => (
                    <View key={index} style={styles.itemContainer}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={styles.horizonScroll}>
                            {globalData.map((_, index) => (
                                <View key={index} style={styles.itemScroll} activeOpacity={0.8}>
                                    <ImageBackground source={{ uri: `${_.url}` }} resizeMode='cover' style={styles.image}>
                                    </ImageBackground>
                                </View>
                            ))}
                        </ScrollView>
                        <View style={{ padding: 10 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('OwnTripCombo')}>
                                <Text style={styles.headerName}>Name</Text>
                                <View style={styles.ratingContainer}>
                                    <View style={styles.rating}>
                                        <Text style={styles.ratingText}>5.0</Text>
                                        <FontAwesome name="star" size={16} color={COLORS.white} />
                                    </View>
                                    <Text style={styles.status}>Good</Text>
                                </View>
                                <Text numberOfLines={5}>Hi hello hobm gegkn ngelkn, bkejgb, knwgljeglg. eglbgljwljgrg</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default OwnTripChooseCombo

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flex: 1,
        backgroundColor: COLORS.white
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
        justifyContent: 'center'
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
        marginVertical: 20
    },
    title: {
        fontWeight: 'bold',
        color: COLORS.black,
        fontSize: SIZES.title,
        marginBottom: 10
    },
    horizonScroll: {
        height: 150,
        marginTop: 20
    },
    itemContainer: {
        padding: 20,
        borderRadius: 20,
        shadowColor: COLORS.black,
        shadowOffset: { width: 10, height: 3 },
        backgroundColor: COLORS.white,
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10,
        marginBottom: 40
    },
    itemScroll: {
        height: "100%",
        width,
        marginRight: 10,
        elevation: 5,
        borderRadius: 10
    },
    image: {
        flex: 1,
        width: '100%',
        justifyContent: "flex-end",
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.darkGreen,
        paddingVertical: 4,
        paddingHorizontal: 10,

        borderRadius: 12,
        marginRight: 10,
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
        marginBottom: 10,
    },
})