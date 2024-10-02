import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../constants/color'
import BackTitleButton from '../components/BackTitleButton'
import SIZES from '../constants/fontsize'

const HowItWork = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <BackTitleButton callBack={() => navigation.goBack()} title={'How it works'} />
            <View style={{ paddingHorizontal: 20, marginTop: 40 }}>
                <View>
                    <Text style={styles.title}>Title</Text>
                    <Text style={styles.des}>thông tin văn bản gì gì đó ghi ở đây. aiaobgoabggajovajvjabvjadv jadlvdnjnjvjlav djalv adjlaljvda vlja dvjlad vjlavd vjv</Text>
                    <Text style={styles.des}>thông tin văn bản gì gì đó ghi ở đây. aiaobgoabggajovajvjabvjadv jadlvdnjnjvjlav djalv adjlaljvda vlja dvjlad vjlavd vjv</Text>
                </View>
                <View style={{ marginTop: 40 }}>
                    <Text style={styles.title}>Title</Text>
                    <Text style={styles.des}>thông tin văn bản gì gì đó ghi ở đây. aiaobgoabggajovajvjabvjadv jadlvdnjnjvjlav djalv adjlaljvda vlja dvjlad vjlavd vjv</Text>
                    <Text style={styles.des}>thông tin văn bản gì gì đó ghi ở đây. aiaobgoabggajovajvjabvjadv jadlvdnjnjvjlav djalv adjlaljvda vlja dvjlad vjlavd vjv</Text>
                </View>
            </View>
        </View>
    )
}

export default HowItWork

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
        paddingTop: 30
    },
    title: {
        fontWeight: 'bold',
        fontSize: SIZES.heroSection,
        marginBottom: 20
    },
    des: {
        marginBottom: 20
    }
})