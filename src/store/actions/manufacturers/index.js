import { fetchManufacturers } from '../../../api/manufacturers'

export const GET_MANUFACTURERS = 'GET_MANUFACTURERS'


export const loadManufacturers = () => dispatch => fetchManufacturers()
    .then((response) => {
        dispatch({ type: GET_MANUFACTURERS, payload: response })
    }).catch((err) => {
        if(err) console.log(err)
    })