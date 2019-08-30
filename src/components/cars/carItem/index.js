import React from 'react';

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
            <a href="/#">View Detail</a>
        </div>
    </div>
)

export default CarItem