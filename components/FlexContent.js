import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'
import SIZES from '../constants/fontsize'
import COLORS from '../constants/color'
import Ionicons from 'react-native-vector-icons/Ionicons'

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
                <View style={{ display: 'flex', flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{ fontWeight: 'bold', color: COLORS.white }}>{titleBtn}</Text>
                    </TouchableOpacity>
                    {isShowStart && (
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                            <Text style={{ fontWeight: 'bold', color: COLORS.primary }}>
                                {data?.star.toFixed(1)}
                            </Text>
                            <Ionicons name='star' size={20} color={COLORS.primary} />
                        </View>
                    )}
                </View>
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
        width: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'flex-start'
    }
})