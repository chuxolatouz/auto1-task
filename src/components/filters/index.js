import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadManufacturers } from '../../store/actions/manufacturers'
import { loadColors } from '../../store/actions/colors'
import './index.css'

class Filters extends Component {
    componentDidMount() {
        const { loadManufacturers, loadColors } = this.props
        loadManufacturers()
        loadColors()
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
        manufacturers: state.filterReducer.manufacturers,
        colors: state.filterReducer.colors
    }
}

const mD = {
    loadManufacturers,
    loadColors
}

export default connect(mS,mD)(Filters)