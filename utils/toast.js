import Toast from 'react-native-toast-message'

export function info(message) {
    Toast.show({
        type: 'info',
        text1: message,
    })
}

export function error(message) {
    Toast.show({
        type: 'error',
        text1: message,
    })
}

export function show(message) {
    Toast.show({
        type: 'success',
        text1: message,
    })
}
