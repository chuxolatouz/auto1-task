import { GET_MANUFACTURERS } from '../../actions/manufacturers'
import { GET_COLORS } from '../../actions/colors'

const initialState = {
    activeColor: '',
    activeManufacturer: '',
    colors: [],
    manufacturers: []
}

const filterReducers = (state = initialState, action) => {
    switch(action.type) {
        case GET_MANUFACTURERS:
            return {
                ...state,
                manufacturers: action.payload.manufacturers
            }

        case GET_COLORS:
            return {
                ...state,
                colors: action.payload.colors
            }

        default:
            return state
    }
}

export default filterReducers