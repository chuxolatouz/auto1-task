import { fetchColors } from '../../../api/colors'

export const GET_COLORS = 'GET_COLORS'

export const loadColors = () => dispatch => fetchColors()
    .then((response) => {
        dispatch({ type: GET_COLORS, payload: response })
    })
    .catch((err) => {
        if(err) console.log(err)
    })