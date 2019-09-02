import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Redirect } from 'react-router'
import { createBrowserHistory } from 'history'

import App from '../components/app'
import CarDetails from '../components/cars/carDetails'
import Header from '../components/app/header'

const history = createBrowserHistory()

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={history}> 
            <div className="App">
                <Header />
                <Redirect exact from="/" to="/cars" />
                <Route exact path="/cars" component={App}/>
                <Route path="/cars/:id" component={CarDetails} />
            </div>
        </Router>
    </Provider>
)

export default Root