import React from 'react'

import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css'

import Auth from './views/Auth'

function App() {
    return (
        <Router>
            <Route exact path='/auth' component={Auth} />
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))