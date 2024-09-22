import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeHeader from '../components/HomeHeader'
import MyCarousel from '../components/MyCarousel'
import TitleWithButton from '../components/TitleWithButton'
import { SIZESCREEN } from '../constants/base'
import COLORS from '../constants/color'
import SIZES from '../constants/fontsize'
import { globalData } from '../sampleData/data'

const width = Dimensions.get('screen').width / 2 - 30

const HomePage = () => {

    const Card = ({ item }) => {
        return (
            <View style={styles.displayAttrac}>
                {item.map((_, index) => (
                    <TouchableOpacity key={index}>
                        <View style={styles.card}>
                            <ImageBackground source={{ uri: `${_.url}` }} resizeMode='cover' imageStyle={{ borderRadius: 20 }} style={styles.image}>
                                <View style={{ width: "100%", padding: 15 }}>
                                    <Text style={styles.title}>{_.title}</Text>
                                    <Text style={styles.des} numberOfLines={3}>{_.des}</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        )
    }

    return (
        <ScrollView style={styles.container}>
            <View>
                <HomeHeader />
                <View style={styles.searchSection}>
                    <LinearGradient
                        // Background Linear Gradient
                        colors={["#509A5A", "#1D795C"]}
                        style={styles.background}
                    />
                    <Text style={styles.insideHeader}>
                        Have a nice day, Nguyen Van A
                    </Text>
                    <View style={styles.searchHeader}>
                        <Ionicons name='search' color={COLORS.primary} size={20} />
                        <TextInput placeholder='Find your favourite place' />
                    </View>
                </View>
                <MyCarousel data={globalData} sizeScreen={SIZESCREEN.MIDDLE} />
                <View style={{ paddingHorizontal: 20, marginTop: 30, marginBottom: 150 }}>
                    <TitleWithButton title={'Attractive Offers'} />
                    <Card item={globalData} />
                </View>
            </View>
        </ScrollView>
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
        shadowColor: "#3BD655",
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        position: "relative"
    },
    background: {
        height: 180,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    insideHeader: {
        position: "absolute",
        fontWeight: "bold",
        top: "40%",
        alignSelf: "center",
        fontSize: SIZES.h3,
        color: COLORS.white
    },
    searchHeader: {
        position: "absolute",
        fontWeight: "bold",
        bottom: 30,
        alignSelf: "center",
        backgroundColor: COLORS.white,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 10,
        width: "70%"
    },
    card: {
        height: 250,
        width,
        marginTop: 10,
    },
    image: {
        flex: 1,
        width: '100%',
        justifyContent: "flex-end",
    },
    displayAttrac: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
        marginTop: 10
    },
    title: {
        fontSize: SIZES.title,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: COLORS.white
    },
    des: {
        fontSize: SIZES.caption,
        color: COLORS.white
    }
})