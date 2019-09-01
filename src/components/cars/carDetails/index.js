import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadCarDetail } from '../../../store/actions/cars'

class CarDetails extends Component {
    render() {
        return(
            <div className="Car-Details">
                <span>{this.props.car.manufacturerName}</span>
            </div>
        )
    }
}

const mS = state => {
    return {
        car: state.carDetails
    }
}
const mD = {
    loadCarDetail
}

export default connect(mS, mD)(CarDetails);