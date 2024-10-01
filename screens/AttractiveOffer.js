import React from 'react'
import { ScrollView, StyleSheet, Text, Touchable, View } from 'react-native'
import FlexContent from '../components/FlexContent'
import SIZES from '../constants/fontsize'
import { globalData } from '../sampleData/data'
import { Image } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'

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
                        <TouchableOpacity activeOpacity={0.6} key={index}>
                            <Image source={{ uri: `${_.url}` }} style={styles.image} />
                            <Text style={[styles.title, { textAlign: 'center', marginBottom: 40 }]}>{_.title}</Text>
                        </TouchableOpacity>
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
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    }
})