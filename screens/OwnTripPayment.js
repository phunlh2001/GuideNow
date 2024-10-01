import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackTitleList from '../components/BackTitleList';
import HeaderOwnTrip from '../components/HeaderOwnTrip';
import COLORS from '../constants/color';
import SIZES from '../constants/fontsize';
import { bankData } from '../sampleData/data';

const OwnTripPayment = ({ navigation }) => {
    const [activeBank, setActiveBank] = useState(null)

    const handleActive = (name) => {
        setActiveBank(name)
    }

    const handleConfirm = async () => {
        if (activeBank !== null) {
            const selectedBank = bankData.find(n => n.name === activeBank);
            try {
                await AsyncStorage.setItem('selectedBank', JSON.stringify(selectedBank));
                navigation.goBack();
            } catch (error) {
                console.log(error);
            }
        }
    }

    const BankCard = ({ name, logo, onPress }) => (
        <TouchableOpacity style={styles.bankContainer} onPress={onPress}>
            <View style={[styles.logoContainer, { borderColor: activeBank === name ? COLORS.darkGreen : COLORS.white }]}>
                <Image source={{ uri: logo }} style={styles.bankLogo} />
            </View>
            <Text style={styles.bankName}>{name}</Text>
        </TouchableOpacity>
    );

    const renderBank = ({ item }) => (
        <BankCard
            name={item.name}
            logo={item.url}
            onPress={() => handleActive(item.name)}
        />
    );

    return (
        <View style={styles.container}>
            <BackTitleList callBack={() => navigation.goBack()} />

            <HeaderOwnTrip title={'Payment method'} />

            <Text style={styles.title}>Choose your bank account</Text>
            <FlatList
                data={bankData}
                renderItem={renderBank}
                keyExtractor={(item) => item.name}
                numColumns={3}
                contentContainerStyle={styles.bankList}
            />
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <TouchableOpacity onPress={handleConfirm} style={styles.confirmBtn}>
                    <Text style={styles.btnText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
        paddingTop: 40
    },
    title: {
        fontSize: 24,
        marginVertical: 60,
        color: COLORS.deepGreen,
        textAlign: 'center'
    },
    bankList: {
        justifyContent: 'center',
    },
    bankContainer: {
        width: 100,
        alignItems: 'center',
        margin: 10,
    },
    logoContainer: {
        width: 80,
        height: 80,
        borderRadius: 10,
        shadowColor: COLORS.black,
        shadowOffset: { width: 10, height: 3 },
        backgroundColor: COLORS.white,
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2
    },
    active: {
        backgroundColor: COLORS.accent,
    },
    bankLogo: {
        width: 60,
        height: 60,
        objectFit: 'contain',
    },
    bankName: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10
    },
    confirmBtn: {
        backgroundColor: COLORS.darkGreen,
        width: 120,
        paddingVertical: 7,
        marginBottom: 50,
        borderRadius: 1000,
        alignSelf: 'center',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        bottom: 100
    },
    btnText: {
        color: COLORS.white,
        fontSize: SIZES.title,
        fontWeight: 'bold'
    }
});

export default OwnTripPayment;
