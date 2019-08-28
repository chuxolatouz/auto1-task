import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadCars } from '../../../store/actions/cars'

class CarsList extends Component {
    componentDidMount(){
        this.props.loadCars()
    }
    render(){
        
        const { carsList } = this.props
        return (
            <div id="CarsList">
                {carsList.map((car) => <p key={car.stockNumber}>{car.manufacturerName}</p>)}
            </div>
        )
    }
}

const mS = state => {
    return {
        carsList: state.carsReducer.cars
    }
}

const mD = {
    loadCars
}

export default connect(mS, mD)(CarsList)
