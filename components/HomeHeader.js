import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Image } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import COLORS from '../constants/color'

const HomeHeader = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.homeHeader}>
            <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                />
            </TouchableOpacity>
            <View style={styles.headerIcon}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Ionicons name="list" size={35} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    homeHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    headerIcon: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        height: '100%',
        width: 50,
    },
    logo: {
        width: 50,
        height: 50,
    },
})
