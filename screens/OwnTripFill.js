import DateTimePicker from '@react-native-community/datetimepicker'
import React, { useEffect, useState } from 'react'
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native'
import BackTitleList from '../components/BackTitleList'
import COLORS from '../constants/color'
import SIZES from '../constants/fontsize'
import { error } from '../utils/toast'
import { clearStorage, getStorage, storeData } from '../utils/storage'

const OwnTripFill = ({ navigation }) => {
    const [inputs, setInputs] = useState(() => {
        const departureDate = new Date()
        const returnDate = new Date(departureDate)
        returnDate.setDate(returnDate.getDate() + 1)
        return {
            numberOfParticipants: 1,
            departureDate,
            returnDate,
        }
    })
    const [showPicker, setShowPicker] = useState({
        showDeparturePicker: false,
        showReturnPicker: false,
    })
    const [tourName, setTourName] = useState('')

    const getTourName = async () => {
        const { data } = await getStorage('tourObj')
        setTourName(data.name)
        await clearStorage('tourObj')
    }

    useEffect(() => {
        getTourName()
    }, [])

    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0')
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const year = date.getFullYear()
        return `${day}/${month}/${year}`
    }

    const onDateChange = (event, selectedDate, type) => {
        const currentDate = selectedDate || inputs[type]
        setShowPicker({
            showDeparturePicker: false,
            showReturnPicker: false,
        })

        if (type === 'departureDate' && currentDate > inputs.returnDate) {
            error('Departure date cannot be later than return date')
        } else if (
            type === 'returnDate' &&
            currentDate < inputs.departureDate
        ) {
            error('Return date cannot be earlier than departure date')
        } else {
            setInputs((prevInputs) => ({
                ...prevInputs,
                [type]: currentDate,
            }))
        }
    }

    const onInputChange = (value, fieldName) => {
        setInputs((prevInputs) => ({
            ...prevInputs,
            [fieldName]: value,
        }))
    }

    const handleNext = async () => {
        await storeData('dateInfo', inputs)
        navigation.navigate('OwnTripChooseCombo')
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <BackTitleList callBack={() => navigation.goBack()} />
                    <View style={styles.backgroundHeader}>
                        <Text style={styles.insideBackground}>
                            You’re choosing {tourName}
                        </Text>
                    </View>
                    <Text style={styles.fill}>
                        Please fill in the blank to continue
                    </Text>

                    <View>
                        <Text style={styles.title}>Number of participants</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="1"
                            value={inputs.numberOfParticipants}
                            keyboardType="numeric"
                            onChangeText={(text) =>
                                onInputChange(text, 'numberOfParticipants')
                            }
                        />
                    </View>

                    <View style={{ marginTop: 30 }}>
                        <Text style={styles.title}>Departure date</Text>
                        <TouchableOpacity
                            onPress={() =>
                                setShowPicker({
                                    ...showPicker,
                                    showDeparturePicker: true,
                                })
                            }
                        >
                            <TextInput
                                style={styles.input}
                                placeholder="dd/mm/yyyy"
                                value={formatDate(inputs.departureDate)}
                                editable={false}
                            />
                        </TouchableOpacity>
                        {showPicker.showDeparturePicker && (
                            <DateTimePicker
                                mode="date"
                                display="spinner"
                                value={inputs.departureDate}
                                onChange={(event, date) =>
                                    onDateChange(event, date, 'departureDate')
                                }
                            />
                        )}
                    </View>

                    <View style={{ marginTop: 30 }}>
                        <Text style={styles.title}>Return date</Text>
                        <TouchableOpacity
                            onPress={() =>
                                setShowPicker({
                                    ...showPicker,
                                    showReturnPicker: true,
                                })
                            }
                        >
                            <TextInput
                                style={styles.input}
                                placeholder="dd/mm/yyyy"
                                value={formatDate(inputs.returnDate)}
                                editable={false}
                            />
                        </TouchableOpacity>
                        {showPicker.showReturnPicker && (
                            <DateTimePicker
                                mode="date"
                                display="spinner"
                                value={inputs.returnDate}
                                onChange={(event, date) =>
                                    onDateChange(event, date, 'returnDate')
                                }
                            />
                        )}
                    </View>

                    <View
                        style={{
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <TouchableOpacity
                            onPress={handleNext}
                            style={styles.confirmBtn}
                        >
                            <Text style={styles.btnText}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default OwnTripFill

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: COLORS.white,
    },
    backgroundHeader: {
        position: 'relative',
        width: '100%',
        height: 50,
        backgroundColor: COLORS.darkGreen,
        borderRadius: 15,
        elevation: 10,
        marginTop: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    insideBackground: {
        fontWeight: 'bold',
        fontSize: SIZES.h2,
        color: COLORS.white,
        textAlign: 'center',
    },
    fill: {
        fontSize: SIZES.h1,
        color: COLORS.deepGreen,
        marginVertical: 20,
    },
    title: {
        fontWeight: 'bold',
        color: COLORS.black,
        fontSize: SIZES.title,
        marginBottom: 10,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: COLORS.primary,
        height: 40,
        borderRadius: 10,
        paddingLeft: 10,
    },
    confirmBtn: {
        backgroundColor: COLORS.darkGreen,
        width: 130,
        paddingVertical: 7,
        marginBottom: 50,
        position: 'absolute',
        bottom: -150,
        borderRadius: 1000,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: COLORS.white,
        fontSize: SIZES.title,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})
