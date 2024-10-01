import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BackTitleList from '../components/BackTitleList';
import COLORS from '../constants/color';
import SIZES from '../constants/fontsize';
import { Image } from 'react-native-elements';
import HeaderOwnTrip from '../components/HeaderOwnTrip';


const OwnTripEdit = ({ navigation }) => {
    const [selected, setSelected] = useState(null);
    const options = [
        { name: 'Option 1', description: 'Description 1', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEadAvccbrbvAwTuTZmz4dOu2Bzg1f_E7poQ&s' },
        { name: 'Option 2', description: 'Description 2', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEadAvccbrbvAwTuTZmz4dOu2Bzg1f_E7poQ&s' },
        { name: 'Option 3', description: 'Description 3', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEadAvccbrbvAwTuTZmz4dOu2Bzg1f_E7poQ&s' },
        { name: 'Option 4', description: 'Description 4', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEadAvccbrbvAwTuTZmz4dOu2Bzg1f_E7poQ&s' },
        { name: 'Option 5', description: 'Description 5', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEadAvccbrbvAwTuTZmz4dOu2Bzg1f_E7poQ&s' },
        { name: 'Option 6', description: 'Description 6', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEadAvccbrbvAwTuTZmz4dOu2Bzg1f_E7poQ&s' },
    ];

    const handleConfirm = async () => {
        if (selected !== null) {
            const selectedOption = options[selected];
            try {
                await AsyncStorage.setItem('selectedOwnTrip', JSON.stringify(selectedOption));
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
                <HeaderOwnTrip title={'Change place'} />
            </View>
            <ScrollView>
                {options.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.option}
                        onPress={() => setSelected(index)}
                    >
                        <View style={styles.optionContent}>
                            <Image source={{ uri: `${option.url}` }} style={styles.imagePlaceholder} />
                            <View style={styles.textContainer}>
                                <Text style={styles.optionName}>{option.name}</Text>
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
        height: 150,
        backgroundColor: COLORS.gray2
    },
    optionContent: {
        flexDirection: 'row',
        flex: 1,
        padding: 10
    },
    imagePlaceholder: {
        width: 150,
        height: '100%',
        marginRight: 20,
    },
    textContainer: {
        flex: 1,
    },
    optionName: {
        fontSize: SIZES.header,
        fontWeight: 'bold',
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
        alignItems: 'center'
    },
    btnText: {
        color: COLORS.white,
        fontSize: SIZES.title,
        fontWeight: 'bold'
    }
});

export default OwnTripEdit;
