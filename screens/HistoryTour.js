import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import BackTitleList from '../components/BackTitleList';
import COLORS from '../constants/color';
import HeaderOwnTrip from '../components/HeaderOwnTrip'
import SIZES from '../constants/fontsize';

const TourCard = ({ place, tourGuide, departureDate, returnDate, location, status, imageUrl }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardFlex}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
                <View style={styles.infoContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.label}>Place:</Text>
                        <Text style={styles.value}>{location}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.label}>Tour Guide:</Text>
                        <Text style={styles.value}>{tourGuide}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.label}>Departure date:</Text>
                        <Text style={styles.value}>{departureDate}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.label}>Return date:</Text>
                        <Text style={styles.value}>{returnDate}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>{place}</Text>
                <Text style={styles.statusText}>{status}</Text>
            </View>
        </View>
    );
};

const HistoryTour = ({ navigation }) => {
    const handleBackToHome = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'AfterLogin' }]
        })
    };

    return (
        <View style={styles.screen}>
            <View style={{ paddingHorizontal: 20, marginVertical: 20 }}>
                <BackTitleList callBack={() => navigation.goBack()} />
                <HeaderOwnTrip title={'History'} />
            </View>
            <ScrollView>
                <TourCard
                    place="Ha Noi #238248"
                    tourGuide="Nguyen Van A"
                    departureDate="7:00 AM 05/09/2024"
                    returnDate="10:00 PM 06/09/2024"
                    location="Can Tho city"
                    status="COMPLETED"
                    imageUrl="https://s3-alpha-sig.figma.com/img/677e/b1e8/608543423bbee4a9878a2ce36bef9023?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L0AYpCOe7EdvnSe3Wv3V2n6rWZRwUigeGvR8KcYFRmarnqTb-FvZ1nXtxzgZmRrzA1POvkFvTNgtA03GysdJ5JkVsrgKJyBlVSsJzrz-wjbo-6SMFzvxRGpUz~EfNh7priMtb43jmJ4ifeQILSjujN~hvY3NHcBtcAy8xYYsafEsn92SziJN1H8R2FhswkwU9nIsX2JTLc7200LURQ0Rdj-mVvfbqXB0wThKCLO4KHlXrLWsQ10PaSRYvSxmTCmAz-QmJdpP57XlPkDuzB-UM-nqDlCDDHTFOh7vIk5zxQm8ioZAyQAtvprH9CVi7Hn72z43UV-fAMBLH-uJHDSPXQ__"
                />
                <TourCard
                    place="Ha Noi #238248"
                    tourGuide="Nguyen Van A"
                    departureDate="7:00 AM 05/09/2024"
                    returnDate="10:00 PM 06/09/2024"
                    location="Can Tho city"
                    status="COMPLETED"
                    imageUrl="https://s3-alpha-sig.figma.com/img/a2d8/786d/262873bd9ea8b592f4f116aed430692b?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=frVHxOLneYmI3xBfyUEvlyrXgMv4QdoOTYq9rR0Ib9zIFyBl3yVp-jKiITAarStDjFCVJPxJDMvGh3UNRL0tekzZM4k-pHm6nslmF2~XJ0O~x8O08xw~cjwFCgApNpblUlrJNBwGhF9cbkqS3w2VRUalot5S1VISMTB~xO3fMpWJ4NOUjER0ikDAaCsOlyDP0QxLTb~I3bh31ZRR8hzk~gO9AFKYvA4Q9-YKJNxt2vQNdINHd6TgWwpxstkJ4YEODT3R64VhDZzaEvqkUP0aJjHy5lprXOmWNwC4~ZuyzyFWA5Si9W3JbNRCMESMrBND3zjkw0WGg2OIayWN4p9cTA__"
                />
            </ScrollView>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <TouchableOpacity onPress={handleBackToHome} style={styles.confirmBtn}>
                    <Text style={styles.btnText}>Back to Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: 40
    },
    cardContainer: {
        borderColor: '#4CAF50',
        borderWidth: 2,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginBottom: 20,
        backgroundColor: COLORS.white,
    },
    cardFlex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 120,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    value: {
        fontWeight: 'normal',

    },
    footerContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    footerText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10,
    },
    statusText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4CAF50',
    },
    confirmBtn: {
        backgroundColor: COLORS.darkGreen,
        width: 150,
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

export default HistoryTour;
