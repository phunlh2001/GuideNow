import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackTitleList from '../components/BackTitleList';
import HeaderOwnTrip from '../components/HeaderOwnTrip';
import COLORS from '../constants/color';
import SIZES from '../constants/fontsize';


const OwnTripPromotion = ({ navigation }) => {
    const [selected, setSelected] = useState(null);
    const options = [
        { name: 'Code: BFF15', description: 'when the bill reaches 1.000.000 VND or more', discount: 'Discount 15%' },
        { name: 'Code: BFF15', description: 'when the bill reaches 1.000.000 VND or more', discount: 'Discount 15%' },
        { name: 'Code: BFF15', description: 'when the bill reaches 1.000.000 VND or more', discount: 'Discount 15%' },
        { name: 'Code: BFF15', description: 'when the bill reaches 1.000.000 VND or more', discount: 'Discount 15%' },
        { name: 'Code: BFF15', description: 'when the bill reaches 1.000.000 VND or more', discount: 'Discount 15%' },
        { name: 'Code: BFF15', description: 'when the bill reaches 1.000.000 VND or more', discount: 'Discount 15%' },
        { name: 'Code: BFF15', description: 'when the bill reaches 1.000.000 VND or more', discount: 'Discount 15%' },
    ];

    const handleConfirm = async () => {
        if (selected !== null) {
            const selectedPromotion = options[selected];
            try {
                await AsyncStorage.setItem('selectedPromotion', JSON.stringify(selectedPromotion));
                navigation.goBack();
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
                <BackTitleList callBack={() => navigation.goBack()} />
                <HeaderOwnTrip title={'Promotional code'} />
            </View>
            <ScrollView>


                {options.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.option}
                        onPress={() => setSelected(index)}
                    >
                        <View style={styles.optionContent}>
                            <View style={styles.textContainer}>
                                <Text style={styles.optionName}>{option.name}</Text>
                                <Text style={styles.discount}>{option.discount}</Text>
                                <Text style={styles.optionDescription} numberOfLines={3}>{option.description}</Text>
                            </View>
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <FontAwesome
                                name={selected === index ? "check-circle" : "circle-o"}
                                size={30}

                                color={selected === index ? "green" : "gray"}
                            />
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirm}>
                <Text style={styles.btnText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        flex: 1,
        backgroundColor: COLORS.white
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        height: 100,
        backgroundColor: COLORS.gray2
    },
    optionContent: {
        flexDirection: 'row',
        flex: 1,
        padding: 10
    },
    textContainer: {
        flex: 1,
    },
    optionName: {
        fontSize: SIZES.header,
    },
    discount: {
        fontWeight: 'bold'
    },
    optionDescription: {
        color: COLORS.black,
    },
    confirmBtn: {
        backgroundColor: COLORS.darkGreen,
        width: 130,
        paddingVertical: 7,
        marginBottom: 30,
        borderRadius: 1000,
        marginTop: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        borderWidth: 2,
        borderColor: COLORS.white
    },
    btnText: {
        color: COLORS.white,
        fontSize: SIZES.title,
        fontWeight: 'bold'
    }
});

export default OwnTripPromotion;
