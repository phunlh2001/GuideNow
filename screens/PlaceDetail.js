import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import BackTitleList from '../components/BackTitleList'
import MyCarousel from '../components/MyCarousel'
import { SIZESCREEN } from '../constants/base'
import COLORS from '../constants/color'
import { clearStorage, getStorage } from '../utils/storage'
import { getPlaceById } from '../api/places'

const PlaceDetail = ({ navigation }) => {
    const [detail, setDetail] = useState({
        title: '',
        description: '',
        images: [],
    })

    const getDetail = async () => {
        try {
            const { data } = await getStorage('placeId')
            const res = await getPlaceById(data.id)
            if (res && res.data) {
                setDetail(res.data)
            }
        } catch (error) {
            console.log('Cannot get detail placement:', error)
        }
    }

    const clear = async () => await clearStorage('placeId')

    useEffect(() => {
        getDetail()
        clear()
    }, [])

    return (
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 20 }}>
                <BackTitleList callBack={() => navigation.goBack()} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <MyCarousel
                    data={detail.images}
                    sizeScreen={SIZESCREEN.FULL}
                    border={0}
                    isShowText={false}
                />
                <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 20,
                            marginBottom: 20,
                        }}
                    >
                        {detail.title}
                    </Text>
                    <Text>{detail.description}</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default PlaceDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: COLORS.white,
    },
})
