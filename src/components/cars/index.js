import React from 'react'
import Select from 'react-select'
import { connect } from 'react-redux';

import CarsList from './carsList'
import Paginator from '../paginator'
import './index.css'

const options = [
    { label: "None", value: "None" },
    { label: "Mileage - Ascending" , value: "asc" },
    { label: "Mileage - Descending", value: "desc" }
]

const Cars = ({ page, total }) => (
    <div id="Cars">
        <div className="Available-Cars">
            <div className="Showing-Cars">
                <span>Available Cars</span>
                <span>Showing {page} cars of {total}</span>
            </div>
            <div className="Sort-Cars">
                <span>Sort by</span>
                <Select
                    options={options}
                />
            </div>
        </div>
        <CarsList />
        <Paginator />
    </div>
)

const mS = state => {
    return {
        page: state.carsReducer.page,
        total: state.carsReducer.total
    }
}

export default connect(mS)(Cars)