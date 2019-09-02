export const SET_FILTERS = 'SET_FILTERS'

export const setFilters = (filters) => dispatch => {
    dispatch({ type: SET_FILTERS, payload: filters })
}