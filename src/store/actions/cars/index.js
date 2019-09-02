import { fetchCars, fetchCarDetail } from '../../../api/cars'

export const GET_CARS = 'GET_CARS'
export const GET_CAR_DETAIL = 'GET_CAR_DETAIL'

export const loadCars = (params = {}) => dispatch => fetchCars(params)
    .then((response) => {
        dispatch({ type: GET_CARS, payload: response })
    }).catch((err) => {
        if(err) console.log(err)
    })

export const loadCarDetail = (carId) => dispatch => fetchCarDetail(carId)
    .then((response) => {
        dispatch({ type: GET_CAR_DETAIL, payload: response.car})
    }).catch((err) => {
        if(err) console.log(err)
    })