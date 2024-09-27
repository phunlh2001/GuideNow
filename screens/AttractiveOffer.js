import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import FlexContent from '../components/FlexContent'
import MyCarousel from '../components/MyCarousel'
import { SIZESCREEN } from '../constants/base'
import SIZES from '../constants/fontsize'
import { attractiveOfferData, globalData } from '../sampleData/data'

const AttractiveOffer = () => {
    return (
        <View style={styles.container}>
            <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginTop: 20 }}>
                <Text style={{ fontWeight: 'bold', fontSize: SIZES.h2 }}>AttractiveOffer</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* <Text style={styles.title}>Hottest</Text>
                <MyCarousel data={globalData} sizeScreen={SIZESCREEN.MIDDLE} />
                <Text style={styles.title}>Golden Hour</Text> */}
                <View style={{ marginTop: 20, marginBottom: 150 }}>
                    {globalData.map((_, index) => (
                        <View key={index}>
                            <FlexContent data={_} titleBtn={'Get'} />
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

export default AttractiveOffer

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: SIZES.title,
        fontWeight: 'bold',
        marginTop: 20
    },
})