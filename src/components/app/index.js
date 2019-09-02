import React from 'react'
import Cars from '../cars'
import Filters from '../filters'

import './App.css'

const App = () => {
  return (
      <div className="App-Content">
        <Filters />
        <Cars />
      </div>
  );
}

export default App;
