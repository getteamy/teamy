import { AppProvider } from '@shopify/polaris'
import '@shopify/polaris/styles.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Register from './views/Auth'

const Routes = () => (
    <AppProvider>
        <Router>
            <Route path='/auth' component={Register} />
        </Router>
    </AppProvider>
)

ReactDOM.render(<Routes />, document.getElementById('root'))