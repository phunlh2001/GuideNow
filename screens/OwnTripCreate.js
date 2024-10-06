import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import BackTitleList from '../components/BackTitleList'
import COLORS from '../constants/color'
import LocalTourHeader from '../components/LocalTourHeader'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SIZES from '../constants/fontsize'
import OwnTripTabView from '../components/OwnTripTabView'

const OwnTripCreate = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
                    <BackTitleList callBack={() => navigation.goBack()} />
                </View>
                <LocalTourHeader isShowText={false} />

                <View style={{ marginTop: 20, paddingHorizontal: 40 }}>
                    <Text style={styles.create}>Let’s create your own trip</Text>
                    <View style={styles.searchHeader}>
                        <Ionicons name='search' color={COLORS.primary} size={20} />
                        <TextInput placeholder='Find your favourite place' />
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, paddingTop: 20, backgroundColor: COLORS.white }}>
                <OwnTripTabView callBack={() => navigation.navigate('OwnTripFill')} />
            </View>
        </View>
    )
}

export default OwnTripCreate

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        backgroundColor: COLORS.white
    },
    searchHeader: {
        fontWeight: "bold",
        alignSelf: "center",
        backgroundColor: COLORS.white,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 10,
        width: "100%",
        borderWidth: 1,
        borderColor: COLORS.deepGreen
    },
    create: {
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: SIZES.title,
        textAlign: 'center'
    }
})