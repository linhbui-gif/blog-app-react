import { BASE_URL } from '../constants/constants'
import { objectToQueryString, handleErrors } from '../utils/function.js'

export default {
    token: undefined,
    headers: {},
    setJwtToken(token) {
        this.token = token
        this.establishHeaderRequest()
    },
    establishHeaderRequest() {
        this.headers = {
            'content-type': 'application/json',
            // 'Authorization': `Bearer ${this.token}`
        }
    },
    get({
            path = '',
            params,
            json = true
        }) {
        return fetch(`${BASE_URL}/${path}?${objectToQueryString(params)}`, {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: this.headers,
            redirect: "follow",
            referrer: "no-referrer",
        })
            .then(response => {
                return json ? response.json() : response.text()
            })
            .catch(async err => { throw await err.json() })
    },
    post({
             path = '',
             payload,
             json = true
         }) {
        return fetch(`${BASE_URL}/${path}`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: this.headers,
            redirect: "follow",
            referrer: "no-referrer",
            body: payload,
        })
            .then(response => {
                return json ? response.json() : response.text()
            })
            .catch(async err => {
                console.log(err)
                throw await err.json()
            })
    }
};