import { BaseApi } from './base'

const http = new BaseApi('auth')

export const login = async (payload) => {
    return http.post('/login', payload)
}

export const register = async (payload) => {
    return http.post('/register', payload)
}

export const verify = async (payload) => {
    return http.post('/verify', payload)
}

export const changePassword = async (payload) => {
    return http.patch('/change-password', payload)
}

export const forgotPassword = async (payload) => {
    return http.patch('/forgot-password', payload)
}
