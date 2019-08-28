import React from 'react'
import Cars from '../cars'
import Filters from '../filters'
import Header from './header'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="App-Content">
        <Filters />
        <Cars />
      </div>
    </div>
  );
}

export default App;
