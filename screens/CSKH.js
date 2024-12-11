import LottieView from 'lottie-react-native'
import { StyleSheet, View } from 'react-native'
import Back from '../assets/back.png'
import { Image } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'

export default function CSKH({ navigation }) {
    return (
        <View style={styles.animationContainer}>
            <View style={styles.flexContainer}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('DrawerGuide')}
                >
                    <Image style={styles.back} source={Back} />
                </TouchableOpacity>
            </View>
            <LottieView
                autoPlay
                loop
                style={{
                    width: '100%',
                    height: '80%',
                    backgroundColor: '#eee',
                }}
                source={require('../assets/commingsoon.json')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        flex: 1,
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    back: {
        width: 30,
        height: 30,
    },
})
