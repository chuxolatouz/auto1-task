import { GET_MANUFACTURERS } from '../../actions/manufacturers'
import { GET_COLORS } from '../../actions/colors'
import { SET_FILTERS } from '../../actions/filters';

const initialState = {
    activeColor: '',
    activeManufacturer: '',
    activeSort: '',
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

        case SET_FILTERS:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}

export default filterReducers