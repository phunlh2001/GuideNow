import React, { useEffect, useRef, useState } from 'react'
import { View, Button, StyleSheet, Text } from 'react-native'
import { Camera } from 'expo-camera'
import { TouchableOpacity } from 'react-native'

//! component is not working for now, so dont using this
const CameraScreen = () => {
    const [hasPer, setHasPer] = useState(null)
    const cameraRef = useRef(null)
    useEffect(() => {
        ;(async () => {
            const { status } = await Camera.requestCameraPermissionsAsync()
            setHasPer(status === 'granted')
        })()
    }, [])

    const takePicture = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync()
        }
    }

    return (
        <View style={styles.container}>
            {hasPer ? (
                <Camera
                    style={styles.camera}
                    ref={cameraRef}
                    type={Camera.Constants.Type.back}
                />
            ) : (
                <View style={styles.denined}>
                    <Text>No access to camera</Text>
                </View>
            )}
            <TouchableOpacity onPress={takePicture}>
                <Text style={styles.btnPicture}>Open Camera</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    denined: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
    },
})

export default CameraScreen
