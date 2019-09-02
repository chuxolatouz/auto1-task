import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadCars } from '../../store/actions/cars'

class Paginator extends Component {
    render() {
        const { loadCars, page, total, count } = this.props
        return (
            <div className="Paginator">
                <button onClick={() => { loadCars({ page: 1}) }}>First</button>
                <button onClick={() => { loadCars({ page: page - 100 })}}>Previous</button>
                <span> Page {page} of {total}</span>
                <button onClick={() => { loadCars({ page: page/100 + 1 }) }}>Next</button>
                <button onClick={() => { loadCars({ page: total }) }}>Last</button>
            </div>
        )
    }
}

const mS = state => {
    return {
        page: state.carsReducer.page,
        total: state.carsReducer.total
    }
}

const mD = {
    loadCars
}


export default connect(mS, mD)(Paginator)