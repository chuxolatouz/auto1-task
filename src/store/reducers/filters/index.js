import { GET_MANUFACTURERS } from '../../actions/manufacturers'

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

        default:
            return state
    }
}

export default filterReducers