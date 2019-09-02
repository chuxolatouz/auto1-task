import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'

import { loadManufacturers } from '../../store/actions/manufacturers'
import { loadColors } from '../../store/actions/colors'
import { setFilters } from '../../store/actions/filters'
import { loadCars } from '../../store/actions/cars'
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
    filterCars = () =>  {
        const { selectedColor, selectedManufacturer } = this.state
        const { setFilters, loadCars, count, sort } = this.props
        setFilters({
            activeColor: selectedColor.value,
            activeManufacturer: selectedManufacturer.value
        })
        
        loadCars({
            color: selectedColor.value,
            manufacturer: selectedManufacturer.value,
            page: count,
            sort
        })
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
                    <button onClick={this.filterCars}>Filter</button>
                        </div>
            </div>
        )
    }
} 

const mS = state => {
    return {
        manufacturers: state.filterReducer.manufacturers,
        colors: state.filterReducer.colors,
        activeColor: state.filterReducer.activeColor,
        activeManufacturer: state.filterReducer.activeManufacturer,
        activeSort: state.filterReducer.activeSort,
        count: state.carsReducer.count,
    }
}

const mD = {
    loadManufacturers,
    loadColors,
    setFilters,
    loadCars
}

export default connect(mS,mD)(Filters)