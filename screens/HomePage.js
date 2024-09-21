import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import { Avatar, Image, Input } from "react-native-elements"
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import COLORS from '../constants/color'
import { LinearGradient } from 'expo-linear-gradient'
import SIZES from '../constants/fontsize'

const HomePage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.homeHeader}>
                <TouchableOpacity>
                    <Image style={styles.logo} source={require('../assets/logo.png')} />
                </TouchableOpacity>
                <View style={styles.avatarContainer}>
                    <Avatar
                        rounded
                        source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                        size={90}
                    />
                </View>
                <View style={styles.headerIcon}>
                    <TouchableOpacity>
                        <Ionicons name="list" size={35} color={COLORS.primary} />
                    </TouchableOpacity>
                </View>
            </View>
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
    logo: {
        width: 50,
        height: 50
    },
    homeHeader: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    headerIcon: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: "100%",
        width: 50,
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
    avatarContainer: {
        position: 'absolute',
        top: '10%',
        left: '43%',
        zIndex: 10,
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
    }
})