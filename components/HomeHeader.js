import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../constants/color'
import { TouchableOpacity } from 'react-native'
import { Avatar, Image } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'

const HomeHeader = () => {
    return (
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
    )
}

export default HomeHeader

const styles = StyleSheet.create({
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
    }, logo: {
        width: 50,
        height: 50
    },
    avatarContainer: {
        position: 'absolute',
        top: '10%',
        left: '43%',
        zIndex: 10,
    },
})