import { makeAutoObservable } from 'mobx'

class RegistrationStore {
    userName = ''
    password = ''
    rePassword = ''
    name = ''
    birthday = ''
    sex = ''
    email = ''
    phoneNumber = ''

    constructor() {
        makeAutoObservable(this)
    }

    setField(field, value) {
        this[field] = value
    }

    validateRegister() {
        return (
            this.userName.trim() &&
            this.password.trim() &&
            this.rePassword.trim() &&
            this.password === this.rePassword
        )
    }

    validateGeneralInfo() {
        return (
            this.name.trim() &&
            this.birthday &&
            this.sex.trim() &&
            this.email.trim() &&
            this.phoneNumber.trim()
        )
    }
}

export const registrationStore = new RegistrationStore()
