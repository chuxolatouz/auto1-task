export const FAVORITE_CARS = 'FAVORITE_CARS'


export const loadFavorites = () => {
    const favorites = localStorage.getItem(FAVORITE_CARS)
    return JSON.parse(favorites) || []
}

export const setFavorite = (car) => {
    const favorites = loadFavorites()
    if(!isFavorite(car)) {
        favorites.push(car)
        localStorage.setItem(FAVORITE_CARS, JSON.stringify(favorites))
    }
    return favorites
}

export const isFavorite = (car) => {
    const favorites = loadFavorites()
    return favorites.find( (car_item) => car_item.stockNumber === car.stockNumber)
}