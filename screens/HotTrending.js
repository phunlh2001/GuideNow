import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import COLORS from '../constants/color'
import BackTitleButton from '../components/BackTitleButton'
import { hotTrendingData } from '../sampleData/data'
import FlexContent from '../components/FlexContent'
const HotTrending = ({ navigation }) => {

    const handleBack = () => {
        navigation.goBack()
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={{ marginBottom: 20 }}>
                <BackTitleButton title={'Hot Trend Tour'} callBack={handleBack} />
            </View>
            {hotTrendingData.map((_, index) => (
                <View key={index}>
                    <FlexContent data={_} titleBtn={'More'} isShowStart={true} />
                </View>
            ))}
        </ScrollView>
    )
}

export default HotTrending

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        backgroundColor: COLORS.white,
        flex: 1,
        paddingHorizontal: 20
    }
})