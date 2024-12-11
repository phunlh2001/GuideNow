import React, { useCallback, useEffect, useState } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native'
import BackTitleList from '../components/BackTitleList'
import HeaderOwnTrip from '../components/HeaderOwnTrip'
import COLORS from '../constants/color'
import SIZES from '../constants/fontsize'
import { useFocusEffect } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons'
import { clearStorage, getStorage } from '../utils/storage'
import { getOneCombo } from '../api/combo'
import { convertDate, formatPrice } from '../utils/converter'

const OwnTripBill = ({ navigation }) => {
    const [bank, setBank] = useState(null)
    const [promotionCode, setPromotionCode] = useState(null)
    const [billDetail, setBillDetail] = useState({})

    useFocusEffect(
        useCallback(() => {
            const getDataFromStorage = async () => {
                try {
                    const storedItem = await getStorage('selectedBank')
                    if (storedItem !== null) {
                        setBank(storedItem)
                        await clearStorage('selectedBank')
                    }
                    const storedItemPromotion = await getStorage(
                        'selectedPromotion',
                    )
                    if (storedItemPromotion !== null) {
                        setPromotionCode(storedItemPromotion)
                        await clearStorage('selectedPromotion')
                    }
                } catch (error) {
                    console.log(error)
                }
            }

            getDataFromStorage()
        }),
    )

    const getBill = async () => {
        try {
            const dateInfo = await getStorage('dateInfo')
            const { data } = await getStorage('comboObj')
            const res = await getOneCombo(data.id)
            setBillDetail({
                ...dateInfo.data,
                comboId: res.data.id,
                price: res.data.price,
            })
        } catch (error) {}
    }

    useEffect(() => {
        getBill()
    }, [])

    const onEdit = async (type) => {
        if (type === 'bank') {
            await clearStorage('selectedBank')
            setBank(null)
            navigation.navigate('OwnTripPayment')
        } else {
            await clearStorage('selectedPromotion')
            setPromotionCode(null)
            navigation.navigate('OwnTripPromotion')
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ marginBottom: 20 }}>
                <BackTitleList callBack={() => navigation.goBack()} />
                <HeaderOwnTrip title={'Bill'} />
            </View>
            <View style={styles.topSection}>
                <View style={styles.imageBox}>
                    <Image
                        source={{
                            uri: 'https://3vi.vn/wp-content/uploads/2023/01/com-tam-long-xuyen-mon-an-don-gian-nhung-day-cuon-hut-01-1660584910.jpg',
                        }}
                        style={styles.image}
                    />
                    <View style={styles.ticketInfo}>
                        <Text style={styles.ticketLocation}>Cần Thơ</Text>
                    </View>
                </View>
                <View style={styles.descriptionBox}>
                    <Text style={styles.description}>
                        Explore the beauty of Can Tho with a visit to the Cai
                        Rang floating market, where you can witness the vibrant
                        life on the river and enjoy fresh local fruits.
                    </Text>
                </View>
            </View>

            <View style={styles.formField}>
                <Text style={styles.label}>Payment method:</Text>
                {!bank ? (
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={() => navigation.navigate('OwnTripPayment')}
                    >
                        <Text style={styles.plusIcon}>+</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 10,
                        }}
                        onPress={() => onEdit('bank')}
                    >
                        <Image
                            source={{ uri: `${bank.url}` }}
                            style={{ width: 30, height: 30 }}
                        />
                        <FontAwesome
                            name="pencil"
                            size={24}
                            color={COLORS.darkGreen}
                        />
                    </TouchableOpacity>
                )}
            </View>

            <View style={styles.formField}>
                <Text style={styles.label}>Departure date:</Text>
                <TextInput
                    style={styles.input}
                    value={convertDate(billDetail.departureDate)}
                    editable={false}
                />
            </View>

            <View style={styles.formField}>
                <Text style={styles.label}>Return date:</Text>
                <TextInput
                    style={styles.input}
                    value={convertDate(billDetail.returnDate)}
                    editable={false}
                />
            </View>

            <View style={styles.formField}>
                <Text style={styles.label}>Price:</Text>
                <Text style={styles.priceText}>
                    {formatPrice(
                        billDetail.numberOfParticipants * billDetail.price,
                    )}
                </Text>
            </View>

            <View style={styles.formField}>
                <Text style={styles.label}>Promotional code:</Text>
                {!promotionCode ? (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('OwnTripPromotion')}
                        style={styles.addButton}
                    >
                        <Text style={styles.plusIcon}>+</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 10,
                        }}
                        onPress={() => onEdit('promotion')}
                    >
                        <Text style={{ fontWeight: 'bold' }}>
                            {promotionCode.discount}
                        </Text>
                        <FontAwesome
                            name="pencil"
                            size={24}
                            color={COLORS.darkGreen}
                        />
                    </TouchableOpacity>
                )}
            </View>

            <View style={styles.formField}>
                <Text style={styles.label}>Total price:</Text>
                <Text style={styles.priceText}>
                    {formatPrice(
                        promotionCode
                            ? billDetail.numberOfParticipants *
                                  billDetail.price *
                                  0.85
                            : billDetail.numberOfParticipants *
                                  billDetail.price,
                    )}
                </Text>
            </View>

            <View style={{ justifyContent: 'flex-end' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('OwnTripCountDown')}
                    style={styles.confirmBtn}
                >
                    <Text style={styles.btnText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

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
        height: 200,
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
        alignItems: 'center',
    },
    plusIcon: {
        fontSize: 20,
        color: '#333',
    },
    priceText: {
        fontSize: 14,
        color: COLORS.black,
        fontWeight: 'bold',
    },
    confirmBtn: {
        backgroundColor: COLORS.darkGreen,
        width: 130,
        paddingVertical: 7,
        marginBottom: 50,
        borderRadius: 1000,
        alignSelf: 'center',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    btnText: {
        color: COLORS.white,
        fontSize: SIZES.title,
        fontWeight: 'bold',
    },
})

export default OwnTripBill
