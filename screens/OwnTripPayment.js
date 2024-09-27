import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import BackTitleList from '../components/BackTitleList';
import COLORS from '../constants/color';
import HeaderOwnTrip from '../components/HeaderOwnTrip';
import SIZES from '../constants/fontsize';

const OwnTripPayment = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <BackTitleList callBack={() => navigation.goBack()} />

            <HeaderOwnTrip title={'Payment method'} />

            <Text style={styles.title}>Payment via bank</Text>
            <View style={styles.linkedAccount}>
                <Text style={styles.linkedText}>Linked account with </Text>
                <Image
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Vietcombank_Logo_2013.svg/1024px-Vietcombank_Logo_2013.svg.png' }} // Thay đổi thành link ảnh của logo ngân hàng Vietcombank
                    style={styles.bankLogo}
                />
            </View>

            <Image
                source={{ uri: 'https://s3-alpha-sig.figma.com/img/0723/401c/9676110966299614097970f65a70406b?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jtvEaQ10gBcdzCpwqeHT5DRMBK2inxHa5uNGFuHsnYrbydBJyRfd4PW7TE7xgxX8jXu1m5pteMDyXGAhGIBzzWWw4grwrQx1Fdp1T9qVErq4at1E2P~5P4MzbYIo6t1lOf3UZfmtCdR9IOy3px772ru3ppNdz5IEdwoaEkukCAdE0fhleY0DrJcGm0CWqHIf64N9kqGvLVtU~p6nKwQ~EoIzE8VyN9igkQEIx4bcoktOL0miqrkTWyhChOz2RNQZnsVBBEJ2t-eH-e-bpUePmRqPcsru0JmumqVVEVygL7JVy2QJX2P6qI0JN7cwaOZh2Ki-AcN~k0tYnWc1yvmryA__' }} // Thay bằng hình ảnh thẻ của bạn
                style={styles.bankCard}
            />

            <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.gridContainer}>
                {Array.from({ length: 9 }).map((_, index) => (
                    <TouchableOpacity key={index} style={styles.gridItem} />
                ))}
            </ScrollView>

            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.confirmBtn}>
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
    title: {
        fontSize: SIZES.title,
        marginTop: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    linkedAccount: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    linkedText: {
        color: 'red',
        fontSize: 14,
    },
    bankLogo: {
        width: 20,
        height: 20,
        marginLeft: 5,
    },
    bankCard: {
        width: 300,
        height: 200,
        marginBottom: 20,
        borderRadius: 20,
        alignSelf: 'center'
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 30,
    },
    gridItem: {
        width: 70,
        height: 70,
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        margin: 5,
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

export default OwnTripPayment;
