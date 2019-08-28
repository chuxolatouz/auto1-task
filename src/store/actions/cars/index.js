import { fetchCars } from '../../../api/cars'

export const GET_CARS = 'GET_CARS'

export const loadCars = dispatch => {
    fetchCars().then((response) => {
        dispatch({ type: GET_CARS, payload: response.data })
    }).catch((err) => {
        if(err) console.log(err)
    })
}
