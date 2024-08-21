import {
    ActivityIndicator,
    Dimensions,
    StyleSheet,
    Text,
    View,
} from 'react-native'

import COLORS from '../constants/color'
import SIZES from '../constants/fontsize'

export default function Loader({ visible = false, content }) {
    return (
        visible && (
            <View style={[styles.container, Dimensions.get('screen')]}>
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color={COLORS.primary} />
                    <Text
                        style={{
                            marginLeft: 20,
                            fontSize: SIZES.base,
                            fontWeight: '500',
                        }}
                    >
                        {content ?? 'Loading...'}
                    </Text>
                </View>
            </View>
        )
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        height: '100%',
    },
    loader: {
        height: 70,
        backgroundColor: COLORS.white,
        borderRadius: 5,
        marginHorizontal: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
})
