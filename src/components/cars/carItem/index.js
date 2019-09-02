import React from 'react';
import { Link } from 'react-router-dom'

import './index.css'

const CarItem = ({ 
    manufacturerName,
    modelName,
    stockNumber,
    mileage,
    color,
    image, 
    fuelType
}) => (
    <div className="Car-Item">
        <img className="Car-Image" src={image} alt="Car"/>
        <div className="Car-Details">
            <h3>{manufacturerName} {modelName}</h3>
            <span className="Car-Info">Stock #{stockNumber} - {mileage.number}{mileage.unit} - {fuelType} - {color}</span>
            <Link className="App-link" to={`/cars/${stockNumber}`}>View Details</Link>
        </div>
    </div>
)

export default CarItem