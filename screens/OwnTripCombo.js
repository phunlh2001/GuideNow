import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackTitleList from '../components/BackTitleList';
import MyCarousel from '../components/MyCarousel';
import { SIZESCREEN } from '../constants/base';
import COLORS from '../constants/color';
import SIZES from '../constants/fontsize';
import { globalData, timelineData } from '../sampleData/data';



const OwnTripCombo = ({ navigation }) => {
    const [timeline, setTimeline] = useState(timelineData);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const TimeLineItem = ({ time, name, description, isLast, onEdit, onRemove }) => {
        return (
            <View style={styles.timelineItem}>
                <View style={styles.timeline}>
                    <View style={styles.circle} />
                    {!isLast && <View style={styles.line} />}
                </View>
                <View style={styles.content}>
                    <Text style={styles.time}>{time}</Text>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.description} numberOfLines={2}>{description}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.editButton} onPress={onEdit}>
                        <FontAwesome name="pencil" size={24} color={COLORS.white} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.removeButton} onPress={onRemove}>
                        <FontAwesome name="trash" size={24} color={COLORS.white} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    useFocusEffect(
        useCallback(() => {
            const getDataFromStorage = async () => {
                try {
                    const storedItem = await AsyncStorage.getItem('selectedOwnTrip');
                    if (storedItem && selectedIndex !== null) {
                        const parsedItem = JSON.parse(storedItem);

                        const updatedData = [...timeline];
                        updatedData[selectedIndex].name = parsedItem.name;
                        updatedData[selectedIndex].description = parsedItem.description;

                        setTimeline(updatedData);
                        setSelectedIndex(null);
                        await AsyncStorage.removeItem('selectedOwnTrip');
                    }
                } catch (error) {
                    console.log(error);
                }
            };

            getDataFromStorage();
        }, [selectedIndex])
    );

    const handleEdit = (index) => {
        setSelectedIndex(index);
        navigation.navigate('OwnTripEdit');
    };

    const handleRemove = (index) => {
        const updatedTimeline = timeline.filter((_, i) => i !== index);
        setTimeline(updatedTimeline);
    };

    return (
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 20 }}>
                <BackTitleList callBack={() => navigation.goBack()} />
            </View>
            <ScrollView style={{ marginTop: 20 }}>
                <MyCarousel data={globalData} sizeScreen={SIZESCREEN.FULL} isShowText={false} border={false} />
                <View style={{ paddingHorizontal: 30, marginTop: 20 }}>
                    <View style={styles.header}>
                        <Text style={styles.headerName}>Name</Text>
                        <View style={styles.ratingContainer}>
                            <View style={styles.rating}>
                                <Text style={styles.ratingText}>5.0</Text>
                                <FontAwesome name="star" size={16} color={COLORS.white} />
                            </View>
                            <Text style={styles.status}>Good</Text>
                        </View>
                    </View>

                    {timeline.map((_, index) => (
                        <View key={index}>
                            <TimeLineItem
                                name={_.name}
                                description={_.description}
                                time={_.time}
                                isLast={index === timeline.length - 1}
                                onEdit={() => handleEdit(index)}
                                onRemove={() => handleRemove(index)}
                            />
                        </View>
                    ))}

                    <TouchableOpacity onPress={() => navigation.navigate('OwnTripBill')} style={styles.confirmBtn}>
                        <Text style={styles.btnText}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        flex: 1,
        backgroundColor: COLORS.white,
    },
    header: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    headerName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.darkGreen,
        paddingVertical: 4,
        paddingHorizontal: 10,

        borderRadius: 12,
        marginRight: 10,
    },
    ratingText: {
        marginRight: 4,
        color: COLORS.white,
    },
    status: {
        backgroundColor: COLORS.darkGreen,
        color: COLORS.white,
        fontWeight: 'bold',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 12,
    },
    timelineItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    timeline: {
        alignItems: 'center',
        height: 130
    },
    circle: {
        width: 16,
        height: 16,
        backgroundColor: COLORS.darkGreen,
        borderRadius: 8,
        zIndex: 1,
    },
    line: {
        flex: 1,
        width: 2,
        backgroundColor: COLORS.darkGreen,
        marginTop: -2,
    },
    content: {
        marginLeft: 24,
        flex: 1,
    },
    time: {
        fontSize: SIZES.header,
    },
    name: {
        fontSize: 16,
        marginVertical: 4,
        fontSize: SIZES.header,
        fontWeight: 'bold'
    },
    editButton: {
        backgroundColor: COLORS.darkGreen,
        width: 40,
        height: 40,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    confirmBtn: {
        backgroundColor: COLORS.darkGreen,
        width: 130,
        paddingVertical: 7,
        marginBottom: 50,
        borderRadius: 1000,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: COLORS.white,
        fontSize: SIZES.title,
        fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    removeButton: {
        backgroundColor: COLORS.red,
        width: 40,
        height: 40,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
});

export default OwnTripCombo;
