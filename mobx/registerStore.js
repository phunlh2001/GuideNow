import { action, makeAutoObservable, observable } from 'mobx'
import { createContext } from 'react'

class regsiterSlice {
    listRegister = {}

    constructor() {
        makeAutoObservable(this, {
            listRegister: observable,
            setRegisterField: action,
        })
    }

    // * Store all of field of phase one of register
    setRegisterFirstPhase(userName, password, repassword) {
        this.listRegister.userName = userName
        this.listRegister.password = password
        this.listRegister.repassword = repassword
    }

    // * Check if full of field in phase one is filled
    get isPhaseOneValid() {
        const listField = this.listRegister
        for (let index in listField) {
            if (
                listField[index] === '' ||
                !listField[index] ||
                listField[index] === null
            ) {
                return false
            }
        }
        return true
    }
}

const registerAction = createContext(new regsiterSlice())
