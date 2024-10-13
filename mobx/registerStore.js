import { makeAutoObservable } from 'mobx'

class RegistrationStore {
    userName = ''
    password = ''
    rePassword = ''
    name = ''
    birthday = ''
    email = ''
    phoneNumber = ''
    errors = {
        userName: '',
        password: '',
        email: '',
        phoneNumber: '',
        rePassword: '',
    }

    constructor() {
        makeAutoObservable(this)
    }

    setField(field, value) {
        this[field] = value
        if (field === 'userName') {
            this.validateUserName()
        } else if (field === 'password' || field === 'rePassword') {
            this.validatePassword()
        } else if (field === 'email') {
            this.validateEmail()
        } else if (field === 'phoneNumber') {
            this.validatePhoneNumber()
        }
    }

    validateRegister() {
        return (
            this.userName.trim() &&
            this.password.trim() &&
            this.rePassword.trim() &&
            this.password === this.rePassword
        )
    }

    validateUserName() {
        const regex = /^[a-zA-Z0-9]*$/
        if (!this.userName.trim()) {
            this.userNameError = 'Username cannot be empty.'
        } else if (!regex.test(this.userName)) {
            this.userNameError =
                'Username cannot contain special characters or spaces.'
        } else {
            this.userNameError = ''
        }
    }

    validatePassword() {
        if (!this.password.trim()) {
            this.passwordError = 'Password cannot be empty.'
        } else if (this.password.includes(' ')) {
            this.passwordError = 'Password cannot contain spaces.'
        } else if (this.password.length < 6) {
            this.passwordError = 'Password must be at least 6 characters long.'
        } else {
            this.passwordError = ''
        }

        if (this.rePassword !== this.password) {
            this.errors.rePassword = 'Passwords do not match'
        } else {
            this.errors.rePassword = ''
        }
    }

    validateEmail() {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!regex.test(this.email)) {
            this.emailError = 'Invalid email format.'
        } else {
            this.emailError = ''
        }
    }

    validatePhoneNumber() {
        const regex = /^[0-9]+$/
        if (!this.phoneNumber.trim()) {
            this.phoneNumberError = 'Phone number cannot be empty.'
        } else if (!regex.test(this.phoneNumber)) {
            this.phoneNumberError = 'Phone number must contain only digits.'
        } else {
            this.phoneNumberError = ''
        }
    }

    validateGeneralInfo() {
        return (
            this.name.trim() &&
            this.birthday &&
            this.email.trim() &&
            this.phoneNumber.trim()
        )
    }

    clearAll() {
        this.userName = ''
        this.password = ''
        this.rePassword = ''
        this.name = ''
        this.birthday = ''
        this.email = ''
        this.phoneNumber = ''

        this.errors = {
            userName: '',
            password: '',
            rePassword: '',
            email: '',
            phoneNumber: '',
        }
    }
}

export const registrationStore = new RegistrationStore()
