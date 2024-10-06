import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { Entypo, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import COLORS from '../constants/color';
import BackTitleButton from '../components/BackTitleButton';
import SIZES from '../constants/fontsize';

const LoginAndSecurity = ({ navigation }) => {
    const [isBiometricsEnabled, setBiometricsEnabled] = useState(true);
    const [isLoginWithoutPasswordEnabled, setLoginWithoutPasswordEnabled] = useState(true);

    return (
        <View style={styles.container}>
            <BackTitleButton callBack={() => navigation.goBack()} title={"Login and security"} />

            <View style={styles.verifiedContainer}>
                <FontAwesome name="shield" size={60} color={COLORS.darkGreen} />
                <Text style={styles.verifiedText}>Your account has been verified</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Security setting</Text>

                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('EnterPassword')}>
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <FontAwesome name="lock" size={28} color={COLORS.darkGreen} />
                        <Text style={styles.menuText}>Password</Text>
                    </View>
                    <FontAwesome name="chevron-right" size={20} color={COLORS.darkGreen} />
                </TouchableOpacity>

                <View style={styles.switchContainer}>
                    <View style={{ flexDirection: 'row', gap: 10, alignItems: 'flex-start' }}>
                        <MaterialCommunityIcons name='fingerprint' size={28} color={COLORS.darkGreen} />
                        <Text style={styles.menuText}>Biometrics</Text>
                    </View>
                    <Switch
                        value={isBiometricsEnabled}
                        onValueChange={() => setBiometricsEnabled(!isBiometricsEnabled)}
                        trackColor={{ true: COLORS.darkGreen, false: COLORS.grey }}
                    />
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>App setting</Text>

                <View style={styles.switchContainer}>
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <Entypo name='lock-open' size={28} color={COLORS.darkGreen} />
                        <Text style={styles.menuText}>Login without password</Text>
                    </View>
                    <Switch
                        value={isLoginWithoutPasswordEnabled}
                        onValueChange={() => setLoginWithoutPasswordEnabled(!isLoginWithoutPasswordEnabled)}
                        trackColor={{ true: COLORS.darkGreen, false: COLORS.grey }}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: 30,
        paddingHorizontal: 20
    },
    verifiedContainer: {
        marginTop: 40,
        alignItems: 'center',
        elevation: 4,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        height: 250,
        justifyContent: 'center',
    },
    verifiedText: {
        fontSize: 18,
        color: COLORS.black,
        marginTop: 10,
    },
    section: {
        marginVertical: 30,
    },
    sectionTitle: {
        fontSize: SIZES.heroSection,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    menuText: {
        fontSize: 18,
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
});

export default LoginAndSecurity;
