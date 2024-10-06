import React, { useState } from 'react'
import { View } from 'react-native'
import StepIndicator from 'react-native-step-indicator'
import CreateAccount from './components/CreateAccount'
import GeneralInfo from './components/GeneralInfo'
import VerificationScreen from './components/Verify'

const labels = [
    'Create account',
    'General information',
    'OTP Confirm',
    'Avatar',
]

const customStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#1A9244',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#1A9244',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#1A9244',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#1A9244',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 15,
    currentStepIndicatorLabelFontSize: 15,
    stepIndicatorLabelCurrentColor: '#1A9244',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#1A9244',
}



const Register = ({ navigation }) => {

    const checkStep = (position, setNewPosition) => {
        switch (position) {
            case 0:
                return <CreateAccount goNext={setNewPosition} />
            case 1:
                return <GeneralInfo goNext={setNewPosition} />
            case 2:
                return <VerificationScreen goNext={setNewPosition} />
            case 3:
                return navigation.navigate('Photo')
        }
    }
    const [currentPosition, setCurrentPosition] = useState(0)

    return (
        <View
            style={{ height: '100%', paddingTop: 55, backgroundColor: '#FFF' }}
        >
            <StepIndicator
                customStyles={customStyles}
                currentPosition={currentPosition}
                labels={labels}
                stepCount={4}
            />
            <View style={{ height: '100%' }}>
                {checkStep(currentPosition, setCurrentPosition)}
            </View>
        </View>
    )
}

export default Register
