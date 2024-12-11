import { FontAwesome } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { Image } from 'react-native-elements'
import BackTitleList from '../components/BackTitleList'
import HeaderOwnTrip from '../components/HeaderOwnTrip'
import COLORS from '../constants/color'
import SIZES from '../constants/fontsize'
import { getPlaces } from '../api/places'
import { getStorage, storeData } from '../utils/storage'

const OwnTripEdit = ({ navigation }) => {
    const [selected, setSelected] = useState(null)
    const [places, setPlaces] = useState([])

    const getData = async () => {
        try {
            const res = await getPlaces()
            const { data } = await getStorage('placeList')
            if (res && res.data) {
                setPlaces(
                    res.data.filter(
                        (obj1) =>
                            !data.some((obj2) => obj2.name === obj1.title),
                    ),
                )
            }
        } catch (error) {
            console.log('Cannot get places:', error)
        }
    }

    useEffect(() => {
        if (places.length === 0) {
            getData()
        }
    }, [places.length])

    const handleConfirm = async () => {
        if (selected !== null) {
            const selectedOption = places[selected]
            try {
                await storeData('selectedOwnTrip', selectedOption)
                navigation.goBack()
            } catch (error) {
                console.log(error)
            }
        }
    }

    const handleDetail = async (placeId) => {
        await storeData('placeId', { id: placeId })
        navigation.navigate('PlaceDetail')
    }

    return (
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
                <BackTitleList callBack={() => navigation.goBack()} />
                <HeaderOwnTrip title={'Change place'} />
            </View>
            <ScrollView>
                {places.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.option}
                        onPress={() => setSelected(index)}
                    >
                        <View style={styles.optionContent}>
                            <Image
                                source={{ uri: `${option.images[0].url}` }}
                                style={styles.imagePlaceholder}
                            />
                            <View style={styles.textContainer}>
                                <View>
                                    <Text style={styles.optionName}>
                                        {option.title}
                                    </Text>
                                    <Text
                                        style={styles.optionDescription}
                                        numberOfLines={3}
                                    >
                                        {option.description}
                                    </Text>
                                </View>
                                <TouchableOpacity
                                    style={styles.detailBtn}
                                    onPress={() => handleDetail(option.id)}
                                >
                                    <Text
                                        style={{
                                            textAlign: 'center',
                                            color: COLORS.white,
                                        }}
                                    >
                                        Detail
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <FontAwesome
                                name={
                                    selected === index
                                        ? 'check-circle'
                                        : 'circle-o'
                                }
                                size={30}
                                color={selected === index ? 'green' : 'gray'}
                            />
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirm}>
                <Text style={styles.btnText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        flex: 1,
        backgroundColor: COLORS.white,
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
        backgroundColor: COLORS.gray2,
    },
    optionContent: {
        flexDirection: 'row',
        flex: 1,
        padding: 10,
    },
    imagePlaceholder: {
        width: 150,
        height: '100%',
        marginRight: 20,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'space-between',
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
        alignItems: 'center',
    },
    btnText: {
        color: COLORS.white,
        fontSize: SIZES.title,
        fontWeight: 'bold',
    },
    detailBtn: {
        paddingVertical: 7,
        backgroundColor: COLORS.darkGreen,
        width: 100,
        borderRadius: 15,
    },
})

export default OwnTripEdit
