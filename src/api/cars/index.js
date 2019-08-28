import fetch from '../axios'

export const fetchCars = (params = {}) => fetch
    .get('/cars', params)
    .then( (response) => {
        if (response.success)
            return {
                cars: response.data.cars,
                total: response.data.totalCarsCount,
                page: response.data.totalPageCounts
            }
        return null
    })
    .catch((error) => {
        if(error)
            return error
        return null
    })