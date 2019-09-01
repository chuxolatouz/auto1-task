import { GET_CARS, GET_CAR_DETAIL } from '../../actions/cars'

const initialState = {
    details: {
        color: '',
        fuelType: '',
        manufacturerName: '',
        mileage: {
            number: -1,
            unit: '',
        },
        modelName: '',
        pictureUrl: '',
        stockNumber: -1,
    },
    cars: [],
    count: 0,
    page: 1,
    error: true
}

const carsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CARS:
            return {
                ...state,
                ...action.payload
            }
        case  GET_CAR_DETAIL:
            return {
                ...state,
                details: action.payload
            }
        default:
            return state
    }
}

export default carsReducer