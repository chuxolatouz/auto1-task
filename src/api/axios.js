import axios from 'axios'

const fetch = {
    get: (url, params) => axios.get(`/api/${url}`, { params })
}

export default fetch