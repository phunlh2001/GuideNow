import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'
import SIZES from '../constants/fontsize'
import COLORS from '../constants/color'

const width = Dimensions.get('screen').width / 2 - 20

const FlexContent = ({ data, titleBtn, isShowStart }) => {
    return (
        <View style={styles.flexContainer}>
            <Image style={styles.image} source={{
                uri: `${data.url}`,
            }} />
            <View style={styles.right}>
                <Text style={{ fontWeight: 'bold', fontSize: SIZES.title }}>{data.title}</Text>
                <Text style={{ width: '80%', fontSize: SIZES.caption }} numberOfLines={2}>{data.des}</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{ fontWeight: 'bold', color: COLORS.white }}>{titleBtn}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FlexContent

const styles = StyleSheet.create({
    right: {
        paddingLeft: 10,
        paddingRight: 10,
        display: 'flex',
        justifyContent: 'space-between',
        width
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        height: 120,
        width,
        marginBottom: 20
    },
    image: {
        width,
        height: '100%',
        borderRadius: 20
    },
    btn: {
        paddingHorizontal: 20,
        paddingVertical: 7,
        backgroundColor: COLORS.primary,
        borderRadius: 50,
        width: 70,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
})