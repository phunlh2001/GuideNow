import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import COLORS from '../constants/color'
import BackTitleButton from '../components/BackTitleButton'
import SIZES from '../constants/fontsize'

const GeneralInfomation = ({ navigation }) => {
    const MenuItem = ({ title, onPress }) => (
        <TouchableOpacity style={styles.menuItem} onPress={onPress}>
            <Text style={styles.menuText}>{title}</Text>
            <FontAwesome
                name="chevron-right"
                size={24}
                color={COLORS.darkGreen}
            />
        </TouchableOpacity>
    )

    return (
        <View style={styles.container}>
            <BackTitleButton
                callBack={() => navigation.goBack()}
                title={'General information'}
            />
            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>About app</Text>
                    <MenuItem
                        title="Terms of use"
                        onPress={() => navigation.navigate('TermOfUse')}
                    />
                    <MenuItem
                        title="Privacy policy"
                        onPress={() => navigation.navigate('Policy')}
                    />
                    <MenuItem
                        title="How it works"
                        onPress={() => navigation.navigate('HowItWork')}
                    />
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Social network</Text>
                    <MenuItem
                        title="Facebook"
                        onPress={() =>
                            Linking.openURL(
                                'https://www.facebook.com/profile.php?id=61566022575543',
                            )
                        }
                    />
                    <MenuItem
                        title="Website"
                        onPress={() =>
                            Linking.openURL(
                                'https://www.facebook.com/profile.php?id=61566022575543',
                            )
                        }
                    />
                </View>

                <Text style={styles.versionText}>Version 1.5.1</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    section: {
        marginBottom: 40,
    },
    sectionTitle: {
        fontSize: SIZES.heroSection,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    menuText: {
        fontSize: 18,
        color: COLORS.black,
    },
    versionText: {
        textAlign: 'center',
        fontSize: 14,
        color: COLORS.gray,
        marginTop: 50,
    },
})

export default GeneralInfomation
