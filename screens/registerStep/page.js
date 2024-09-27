import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import Stepper from 'react-native-stepper-ui'
import Mycomponent from '../../components/mockComponent/page.js'
import Register from '../Register/Register.js'

export const RegisterSteps = () => {
    const [active, setActive] = useState(0)

    const content = [
        <Register onNext={() => setActive((p) => p + 1)} />,
        <Mycomponent title="Component 2" />,
        <Mycomponent title="Component 3" />,
    ]
    return (
        <View>
            <View style={{ marginVertical: 80 }}>
                <Stepper
                    active={active}
                    content={content}
                    onNext={() => setActive((p) => p + 1)}
                    onBack={() => setActive((p) => p - 1)}
                    onFinish={() => Alert.alert('Finish')}
                    stepStyle={{
                        backgroundColor: '#2A4F44',
                        width: 30,
                        height: 30,
                        borderRadius: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
