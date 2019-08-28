import { combineReducers } from 'redux'
import carsReducer from './cars'
import filterReducer from './filters'

export default combineReducers({
    carsReducer,
    filterReducer
})
