import React from 'react'
import logo from '../../../assets/images/logo.png';

const Header = () => (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-header-options">
            <span> Purchase </span>
            <span> My Order </span>
            <span> Sell </span>
        </div>
    </header>
)

export default Header