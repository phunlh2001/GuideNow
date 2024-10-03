import { useRef, useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default function Chat() {
    return (
        <View style={styles.animationContainer}>
            <LottieView
                autoPlay
                loop
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: '#eee',
                }}
                source={require('../assets/commingsoon.json')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    buttonContainer: {
        paddingTop: 20,
    },
});
