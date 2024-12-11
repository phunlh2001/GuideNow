import { BaseApi } from './base'

const http = new BaseApi('placements')

export const getPlaces = async () => {
    return http.get('/')
}

export const getPlaceById = async (id) => {
    return http.get('/' + id)
}
