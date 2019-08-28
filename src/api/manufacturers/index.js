import fetch from '../axios'

export const fetchManufacturers = (params = {}) => fetch
    .get('manufacturers', params)
    .then( (response) => {
        if(response.status === 201)
            return {
                manufacturers: response.data.manufacturers
            }
        return null
    })
    .catch((error) => {
        if(error)
            return (error)
        return null
    })