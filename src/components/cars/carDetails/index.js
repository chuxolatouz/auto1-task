import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadCarDetail } from '../../../store/actions/cars'

class CarDetails extends Component {

    componentDidMount() {
        this.props.loadCarDetail(this.props.match.params.id)
        
    }

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
        car: state.carsReducer.details
    }
}
const mD = {
    loadCarDetail
}

export default connect(mS, mD)(CarDetails);