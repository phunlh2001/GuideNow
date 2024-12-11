import React, { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

const DateInput = ({ placeholder = 'Select Date', onDateChange }) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
    const [dateText, setDateText] = useState('')

    const showDatePicker = () => {
        setDatePickerVisibility(true)
    }

    const hideDatePicker = () => {
        setDatePickerVisibility(false)
    }

    const handleConfirm = (selectedDate) => {
        setDateText(selectedDate.toLocaleDateString()) // Cập nhật giá trị của input
        hideDatePicker()

        // Gọi hàm callback nếu được truyền vào
        if (onDateChange) {
            onDateChange(selectedDate)
        }
    }

    return (
        <>
            <TextInput
                style={styles.dateInput} // Áp dụng style cho TextInput
                value={dateText} // Hiển thị ngày đã chọn
                placeholder={placeholder} // Nhận placeholder từ props
                onFocus={showDatePicker} // Mở DatePicker khi người dùng nhấn vào input
                showSoftInputOnFocus={false} // Tắt bàn phím khi focus vào TextInput
                placeholderTextColor="#347E5B" // Màu placeholder
            />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </>
    )
}

const styles = StyleSheet.create({
    dateInput: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: '#D9EDDB',
        color: '#347E5B', // Màu chữ
    },
})

export default DateInput
