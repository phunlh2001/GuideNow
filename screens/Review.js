import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import TitleWithButton from '../components/TitleWithButton'
import COLORS from '../constants/color'
import BackTitleButton from '../components/BackTitleButton'
import { FontAwesome } from '@expo/vector-icons'
import { Avatar } from 'react-native-elements'
import SIZES from '../constants/fontsize'
import { globalData } from '../sampleData/data'

const Review = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ marginBottom: 20 }}>
                <BackTitleButton
                    callBack={() => navigation.goBack()}
                    title={'Review'}
                />
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ paddingBottom: 50 }}
            >
                {globalData.map((_, index) => (
                    <View key={index} style={styles.reviewContainer}>
                        <View style={styles.headerContainer}>
                            <View>
                                <View
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: 10,
                                    }}
                                >
                                    <Avatar
                                        rounded
                                        source={{
                                            uri: 'https://png.pngtree.com/png-vector/20230527/ourmid/pngtree-suitable-for-mobile-apps-web-apps-and-print-media-the-vector-image-of-a-tour-guide-icon-is-available-vector-png-image_52259232.jpg',
                                        }}
                                        size={'medium'}
                                    />
                                    <View>
                                        <Text
                                            style={{
                                                fontSize: SIZES.title,
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            Name
                                        </Text>
                                        <Text
                                            style={{ fontSize: SIZES.caption }}
                                        >
                                            24/08/2024
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={styles.ratingContainer}>
                                    <View style={styles.rating}>
                                        <Text style={styles.ratingText}>
                                            5.0
                                        </Text>
                                        <FontAwesome
                                            name="star"
                                            size={16}
                                            color={COLORS.darkGreen}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginTop: 30 }}>
                            <Text>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Voluptatem consequuntur a quis
                                amet nihil.
                            </Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Review

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 18,
    },
    ratingText: {
        marginRight: 4,
        fontWeight: 'bold',
        fontSize: SIZES.title,
        color: COLORS.darkGreen,
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    reviewContainer: {
        shadowColor: COLORS.black,
        shadowOffset: { width: 10, height: 3 },
        backgroundColor: COLORS.white,
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10,
        marginBottom: 30,
        padding: 20,
        marginHorizontal: 10,
    },
})
