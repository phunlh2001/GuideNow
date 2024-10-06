import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import BackTitleList from '../components/BackTitleList'
import MyCarousel from '../components/MyCarousel'
import { globalData } from '../sampleData/data'
import { SIZESCREEN } from '../constants/base'
import COLORS from '../constants/color'
import SIZES from '../constants/fontsize'


const PlaceDetail = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 20 }}><BackTitleList callBack={() => navigation.goBack()} /></View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <MyCarousel data={globalData} sizeScreen={SIZESCREEN.FULL} border={0} isShowText={false} />
                <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 20 }}>Imperial Citadel of Thang Long</Text>
                    <Text>The cathedral of the Archdiocese of Hanoi, where the Archbishop's throne is located The cathedral of the Archdiocese of Hanoi, where the Archbishop's throne is located The cathedral of the Archdiocese of Hanoi, where the Archbishop's throne is located The cathedral of the Archdiocese of Hanoi, where the Archbishop's throne is located The cathedral of the Archdiocese of Hanoi, where the Archbishop's throne is located   </Text>
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
        backgroundColor: COLORS.white
    }
})