import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { observer } from 'mobx-react'
import CoreButton from '../../../components/CoreButton'
import DateInput from '../../../components/DatePickerCustom'
import { registrationStore } from '../../../mobx/registerStore'

const GeneralInfo = observer(({ goNext }) => {
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        setIsValid(registrationStore.validateGeneralInfo())
    }, [
        registrationStore.name,
        registrationStore.birthday,
        registrationStore.sex,
        registrationStore.email,
        registrationStore.phoneNumber,
    ])

    const handleInputChange = (field, value) => {
        registrationStore.setField(field, value)
    }

    return (
        <ScrollView style={{ marginBottom: 100 }} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.infomationContainer}>
                    <Text style={styles.mainTitle}>General information</Text>
                    <Text style={styles.subTitle}>Please fill in the blanks</Text>
                </View>

                <View style={styles.spaceInput}>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        placeholderTextColor="#347E5B"
                        value={registrationStore.name}
                        onChangeText={(text) => handleInputChange('name', text)}
                    />
                    <DateInput
                        style={styles.input}
                        placeholder="Birthday"
                        value={registrationStore.birthday}
                        onDateChange={(date) => handleInputChange('birthday', date)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#347E5B"
                        value={registrationStore.email}
                        onChangeText={(text) => handleInputChange('email', text)}
                    />
                    {registrationStore.emailError && (
                        <Text style={styles.errorText}>
                            {registrationStore.emailError}
                        </Text>
                    )}
                    <TextInput
                        style={styles.input}
                        placeholder="Phone and number"
                        placeholderTextColor="#347E5B"
                        value={registrationStore.phoneNumber}
                        onChangeText={(text) =>
                            handleInputChange('phoneNumber', text)
                        }
                        keyboardType='numeric'
                    />
                    {registrationStore.phoneNumberError ? (
                        <Text style={styles.errorText}>
                            {registrationStore.phoneNumberError}
                        </Text>
                    ) : null}
                </View>

                <View style={styles.btn_space}>
                    <View style={{ flex: 1 }}>
                        <CoreButton callBack={() => goNext(0)} title={'BACK'} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <CoreButton
                            callBack={() => goNext(2)}
                            title={'NEXT'}
                            disabled={!isValid}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    infomationContainer: {
        width: '100%',
        flexDirection: 'column',
        marginBottom: 20,
        alignItems: 'center',
    },
    mainTitle: {
        fontSize: 40,
        color: '#347E5B', // Màu xanh dương
        textAlign: 'center',
        fontWeight: '800',
    },
    subTitle: {
        fontSize: 15,
        color: '#A9A9A9',
    },
    spaceInput: {
        width: '100%',
        flexDirection: 'column',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: '#D9EDDB',
        color: '#347E5B',
    },
    boxSex: {
        width: '100%',
        gap: 10,
        flexDirection: 'row',
    },
    sexInput: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: '#D9EDDB',
        color: '#347E5B',
        flex: 1,
    },
    dateInput: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: '#D9EDDB',
        color: '#347E5B',
        flex: 1,
    },

    btn_space: {
        width: '100%',
        flexDirection: 'row',
        gap: 10,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: -10,
        marginBottom: 10,
    },
})

export default GeneralInfo
