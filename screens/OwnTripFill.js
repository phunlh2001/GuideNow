import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import BackTitleList from '../components/BackTitleList'
import COLORS from '../constants/color'
import SIZES from '../constants/fontsize'

const OwnTripFill = ({ navigation }) => {
  const [departureDate, setDepartureDate] = useState(new Date())
  return (
    <View style={styles.container}>
      <BackTitleList callBack={() => navigation.goBack()} />
      <View style={styles.backgroundHeader}>
        <Text style={styles.insideBackground}>You’re choosing Can Tho</Text>
      </View>
      <Text style={styles.fill}>Please fill in the blank to continue</Text>

      <View>
        <Text style={styles.title}>Number of participants</Text>
        <TextInput style={styles.input} placeholder='Type'></TextInput>
      </View>

      <View style={{ marginTop: 30 }}>
        <Text style={styles.title}>Departure date</Text>
        <TextInput style={styles.input} placeholder='dd/mm/yy'></TextInput>
      </View>

      <View style={{ marginTop: 30 }}>
        <Text style={styles.title}>Return date</Text>
        <TextInput style={styles.input} placeholder='dd/mm/yy'></TextInput>
      </View>

      <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
        <TouchableOpacity onPress={() => navigation.navigate('OwnTripChooseCombo')} style={styles.confirmBtn}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OwnTripFill

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: COLORS.white
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
    justifyContent: 'center'
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
    marginVertical: 20
  },
  title: {
    fontWeight: 'bold',
    color: COLORS.black,
    fontSize: SIZES.title,
    marginBottom: 10
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.primary,
    height: 40,
    borderRadius: 10,
    paddingLeft: 10
  },
  confirmBtn: {
    backgroundColor: COLORS.darkGreen,
    width: 130,
    paddingVertical: 7,
    marginBottom: 50,
    borderRadius: 1000,
    alignSelf: 'center',
    //position: 'absolute',
    justifyContent: 'center',
  },
  btnText: {
    color: COLORS.white,
    fontSize: SIZES.title,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})