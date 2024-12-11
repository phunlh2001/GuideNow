export class BaseApi {
    constructor(url) {
        this.baseUrl = `https://mighty-modest-moccasin.ngrok-free.app/api/${url}`
    }

    async _fetchApi(ep, method, payload) {
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
        }

        if (payload) {
            options.body = JSON.stringify(payload)
        }

        const res = await fetch(this.baseUrl + ep, options)
        const data = await res.json()
        if (!res.ok) {
            throw new Error(data.message)
        }
        return data
    }

    async get(ep) {
        return this._fetchApi(ep, 'GET', undefined)
    }

    async post(ep, payload = {}) {
        return this._fetchApi(ep, 'POST', payload)
    }

    async put(ep, payload = {}) {
        return this._fetchApi(ep, 'PUT', payload)
    }

    async patch(ep, payload = {}) {
        return this._fetchApi(ep, 'PATCH', payload)
    }

    async delete(ep, payload = {}) {
        return this._fetchApi(ep, 'DELETE', payload)
    }
}
