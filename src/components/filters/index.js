import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadManufacturers } from '../../store/actions/manufacturers'
import './index.css'

class Filters extends Component {
    componentDidMount() {
        this.props.loadManufacturers()
    }
    render() {
        return (
            <div id="Filters">
                <span>Filters</span>
            </div>
        )
    }
} 

const mS = state => {
    return {
        manufacturers: state.filterReducer.manufacturers
    }
}

const mD = {
    loadManufacturers
}

export default connect(mS,mD)(Filters)