import axios from 'axios'

const fetch = {
    get: (url) => axios.get(`/api/${url}`)
}

export default fetch