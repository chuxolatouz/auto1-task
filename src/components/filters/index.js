import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'

import { loadManufacturers } from '../../store/actions/manufacturers'
import { loadColors } from '../../store/actions/colors'
import './index.css'

class Filters extends Component {
    static parseOptions = (options) => {
        return options.map( (option) => {
            if(option.name)
                return { value: option.name, label: option.name }
            return { value: option, label: option }
        })
    }
    state = {
        selectedColor: '',
        selectedManufacturer: ''
    }
    componentDidMount() {
        const { loadManufacturers, loadColors } = this.props
        loadManufacturers()
        loadColors()
    }
    handleColor = selectedColor => {
        this.setState({ selectedColor })
    }
    handleManufacturer = selectedManufacturer => {
        this.setState({ selectedManufacturer })
    }
    render() {
        const { selectedColor, selectedManufacturer } = this.state
        const { colors, manufacturers } = this.props
        return (
            <div id="Filters">
                <div className="Filter-Content">

                    <div>
                        <span>colors</span>
                        <Select
                            placeholder="All car colors"
                            value={selectedColor}
                            onChange={this.handleColor}
                            options={Filters.parseOptions(colors)} />
                    </div>
                    <div>
                        <span>manufacturers</span>
                        <Select
                            placeholder="All manufacturers"
                            value={selectedManufacturer}
                            onChange={this.handleManufacturer}
                            options={Filters.parseOptions(manufacturers)} />
                    </div>

                    <button onClick={() => {}}>Filter</button>
                        </div>
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