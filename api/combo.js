import { BaseApi } from './base'

const http = new BaseApi('combos')

export const getOneCombo = async (id) => {
    return http.get('/' + id)
}
