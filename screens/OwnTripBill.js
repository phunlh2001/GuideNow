import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import BackTitleList from '../components/BackTitleList';
import HeaderOwnTrip from '../components/HeaderOwnTrip';
import COLORS from '../constants/color';
import SIZES from '../constants/fontsize';

const OwnTripBill = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ marginBottom: 20 }}>
                <BackTitleList callBack={() => navigation.goBack()} />
                <HeaderOwnTrip title={'Bill'} />
            </View>
            <View style={styles.topSection}>
                <View style={styles.imageBox}>
                    <Image
                        source={{ uri: 'https://s3-alpha-sig.figma.com/img/a2d8/786d/262873bd9ea8b592f4f116aed430692b?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=frVHxOLneYmI3xBfyUEvlyrXgMv4QdoOTYq9rR0Ib9zIFyBl3yVp-jKiITAarStDjFCVJPxJDMvGh3UNRL0tekzZM4k-pHm6nslmF2~XJ0O~x8O08xw~cjwFCgApNpblUlrJNBwGhF9cbkqS3w2VRUalot5S1VISMTB~xO3fMpWJ4NOUjER0ikDAaCsOlyDP0QxLTb~I3bh31ZRR8hzk~gO9AFKYvA4Q9-YKJNxt2vQNdINHd6TgWwpxstkJ4YEODT3R64VhDZzaEvqkUP0aJjHy5lprXOmWNwC4~ZuyzyFWA5Si9W3JbNRCMESMrBND3zjkw0WGg2OIayWN4p9cTA__' }}
                        style={styles.image}
                    />
                    <View style={styles.ticketInfo}>
                        <Text style={styles.ticketLocation}>Cần Thơ #232848</Text>
                    </View>
                </View>
                <View style={styles.descriptionBox}>
                    <Text style={styles.description}>
                        Hi hello how're you doing? Some description here about the journey or place.
                    </Text>
                </View>
            </View>



            <View style={styles.formField}>
                <Text style={styles.label}>Payment method:</Text>
                <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('OwnTripPayment')}>
                    <Text style={styles.plusIcon}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.formField}>
                <Text style={styles.label}>Departure date:</Text>
                <TextInput
                    style={styles.input}
                    value="7:00 PM 05/08/2024"
                    editable={false}
                />
            </View>

            <View style={styles.formField}>
                <Text style={styles.label}>Return date:</Text>
                <TextInput
                    style={styles.input}
                    value="10:00 PM 06/08/2024"
                    editable={false}
                />
            </View>

            <View style={styles.formField}>
                <Text style={styles.label}>Price:</Text>
                <Text style={styles.priceText}>1.000.000 vnd</Text>
            </View>

            <View style={styles.formField}>
                <Text style={styles.label}>Promotional code:</Text>
                <TouchableOpacity onPress={() => navigation.navigate('OwnTripPromotion')} style={styles.addButton}>
                    <Text style={styles.plusIcon}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.formField}>
                <Text style={styles.label}>Total price:</Text>
                <Text style={styles.priceText}>1.000.000 vnd</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <TouchableOpacity onPress={() => navigation.navigate('OwnTripCountDown')} style={styles.confirmBtn}>
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
        paddingTop: 30,
        backgroundColor: COLORS.white,
    },
    topSection: {
        flexDirection: 'row',
        marginBottom: 40,
        height: 200
    },
    imageBox: {
        flex: 2,
        marginRight: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    descriptionBox: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 8,
    },
    description: {
        fontSize: SIZES.caption,
        color: COLORS.black,
    },
    ticketInfo: {
        marginBottom: 20,
    },
    ticketLocation: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    formField: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    label: {
        fontSize: SIZES.title,
        color: '#333',
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        width: '60%',
        textAlign: 'center',
    },
    addButton: {
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.darkGreen,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 5,
        width: 130,
        justifyContent: 'center',
        alignItems: 'center'
    },
    plusIcon: {
        fontSize: 20,
        color: '#333',
    },
    priceText: {
        fontSize: 14,
        color: COLORS.black,
        fontWeight: 'bold'
    },
    confirmBtn: {
        backgroundColor: COLORS.darkGreen,
        width: 130,
        paddingVertical: 7,
        marginBottom: 50,
        borderRadius: 1000,
        alignSelf: 'center',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    btnText: {
        color: COLORS.white,
        fontSize: SIZES.title,
        fontWeight: 'bold'
    }
});

export default OwnTripBill;
