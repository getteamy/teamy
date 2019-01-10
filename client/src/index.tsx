import React from 'react'
import ReactDOM from 'react-dom'
import Register from './views/Auth'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '@shopify/polaris/styles.css'
import { AppProvider } from '@shopify/polaris'

const Routes = () => (
    <AppProvider>
        <Router>
            <Route path="/auth" component={Register} />
        </Router>
    </AppProvider>
)

ReactDOM.render(<Routes />, document.getElementById('root'))