import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadCarDetail } from '../../../store/actions/cars'

import './index.css'

class CarDetails extends Component {

    componentDidMount() {
        this.props.loadCarDetail(this.props.match.params.id)
        
    }

    render() {
        const {
            modelName,
            manufacturerName,
            stockNumber,
            mileage,
            fuelType,
            color,
            pictureUrl
        } = this.props.car
        
        return(
            <div id="Car-Details">
                    <img className="Car-Image-Detail" src={pictureUrl} alt="Car"/>
                <div className="Car-Info">
                    <div className="Car-Content">
                        <h3>{manufacturerName} {modelName}</h3>
                        <p>Stock #{stockNumber} - {mileage.number}{mileage.km} - {fuelType} - {color}</p>
                    </div>
                    <div className="Car-Favorite">
                        <button >Save</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mS = state => {
    return {
        car: state.carsReducer.details
    }
}
const mD = {
    loadCarDetail
}

export default connect(mS, mD)(CarDetails);