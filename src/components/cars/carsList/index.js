import React, { Component } from 'react'
import { connect } from 'react-redux'

import CarItem from '../carItem'
import { loadCars } from '../../../store/actions/cars'

import './index.css'

class CarsList extends Component {
    componentDidMount(){
        this.props.loadCars()
    }
    render(){
        
        const { carsList } = this.props
        return (
            <div id="CarsList">
                {carsList.map((car) => <CarItem key={car.stockNumber} {...car} />)}
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
