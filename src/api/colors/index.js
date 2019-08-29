import fetch from '../axios'

export const fetchColors = () => fetch
    .get('colors')
    .then((response) => {
        if(response.status === 201)
            return {
                colors: response.data.colors
            }
        return null
    })
    .catch((error) => {
        if(error)
            return error
        return null
    })