import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (key, data, isRemember = false) => {
    try {
        let value
        if (!isRemember) {
            value = JSON.stringify({
                data,
                expiry: Date.now() + 60 * 60 * 1000, // 1 hour
            })
        } else {
            value = JSON.stringify(data)
        }
        await AsyncStorage.setItem(key, value)
    } catch (error) {
        throw error
    }
}

export const getStorage = async (key) => {
    let value = null
    try {
        let data = await AsyncStorage.getItem(key)
        if (data) {
            value = JSON.parse(data)
        }
    } catch (error) {
        throw error
    }
    return value
}

export const clearStorage = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (error) {
        throw error
    }
}
