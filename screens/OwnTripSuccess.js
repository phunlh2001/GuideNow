import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import SIZES from '../constants/fontsize'
import COLORS from '../constants/color';
import HomeHeader from '../components/HomeHeader'
const OwnTripSuccess = ({ navigation }) => {
    const handleBackToHome = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'AfterLogin' }]
        })
    };

    return (
        <View style={styles.container}>
            <HomeHeader />
            <View style={styles.card}>
                <Ionicons name='checkmark-circle' size={70} color={COLORS.darkGreen} style={{ marginBottom: 30 }} />
                <Text style={styles.title}>Successful transaction</Text>
            </View>
            <Text style={styles.description}>
                You can check the schedule at section
            </Text>
            <Text style={styles.link}>History</Text>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <TouchableOpacity onPress={handleBackToHome} style={styles.confirmBtn}>
                    <Text style={styles.btnText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,

    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: 270,
        shadowColor: COLORS.black,
        shadowOffset: { width: 10, height: 3 },
        backgroundColor: COLORS.white,
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10,
        marginTop: 150,
        width: '80%',
    },
    title: {
        fontSize: SIZES.h1,
        fontWeight: 'bold',
        color: COLORS.black,
        width: '70%',
        textAlign: 'center'
    },
    description: {
        fontSize: SIZES.header,
        fontWeight: 'bold',
        color: COLORS.black,
        textAlign: 'center',
        marginTop: 30,

    },
    link: {
        fontWeight: 'bold',
        color: COLORS.darkGreen,
        textAlign: 'center',
        marginTop: 20,
        fontSize: SIZES.title
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
        position: 'absolute',
        bottom: 0
    },
    btnText: {
        color: COLORS.white,
        fontSize: SIZES.title,
        fontWeight: 'bold'
    }
});

export default OwnTripSuccess;
