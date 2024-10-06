import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import COLORS from '../constants/color';
import BackTitleButton from '../components/BackTitleButton';
import SIZES from '../constants/fontsize';

const NotificationSetting = ({ navigation }) => {
    const [isGeneralNoticeOn, setGeneralNoticeOn] = React.useState(true);
    const [isTravelJourneyOn, setTravelJourneyOn] = React.useState(true);
    const [isMessageOn, setMessageOn] = React.useState(true);
    const [isAttractiveOffersOn, setAttractiveOffersOn] = React.useState(true);
    const [isOfferExpiryOn, setOfferExpiryOn] = React.useState(false);

    return (
        <View style={styles.container}>
            <BackTitleButton callBack={() => navigation.goBack()} title={"Notification settings"} />

            <View style={[styles.section, { marginTop: 100 }]}>
                <Text style={styles.sectionTitle}>General notice</Text>

                <View style={styles.switchContainer}>
                    <Text style={styles.menuText}>Turn On</Text>
                    <Switch
                        value={isGeneralNoticeOn}
                        onValueChange={() => setGeneralNoticeOn(!isGeneralNoticeOn)}
                        trackColor={{ true: COLORS.darkGreen, false: COLORS.grey }}
                    />
                </View>

                <View style={styles.switchContainer}>
                    <Text style={styles.menuText}>Travel Journey</Text>
                    <Switch
                        value={isTravelJourneyOn}
                        onValueChange={() => setTravelJourneyOn(!isTravelJourneyOn)}
                        trackColor={{ true: COLORS.darkGreen, false: COLORS.grey }}
                    />
                </View>

                <View style={styles.switchContainer}>
                    <Text style={styles.menuText}>Message</Text>
                    <Switch
                        value={isMessageOn}
                        onValueChange={() => setMessageOn(!isMessageOn)}
                        trackColor={{ true: COLORS.darkGreen, false: COLORS.grey }}
                    />
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Offers notice</Text>

                <View style={styles.switchContainer}>
                    <Text style={styles.menuText}>Attractive offers</Text>
                    <Switch
                        value={isAttractiveOffersOn}
                        onValueChange={() => setAttractiveOffersOn(!isAttractiveOffersOn)}
                        trackColor={{ true: COLORS.darkGreen, false: COLORS.grey }}
                    />
                </View>

                <View style={styles.switchContainer}>
                    <Text style={styles.menuText}>Offers is about to expire</Text>
                    <Switch
                        value={isOfferExpiryOn}
                        onValueChange={() => setOfferExpiryOn(!isOfferExpiryOn)}
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
        paddingHorizontal: 20,
        paddingTop: 30
    },
    section: {
        marginBottom: 10,
        paddingHorizontal: 20
    },
    sectionTitle: {
        fontSize: SIZES.heroSection,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    menuText: {
        fontSize: 18,
    },
});

export default NotificationSetting;
