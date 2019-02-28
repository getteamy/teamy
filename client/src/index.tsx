import React from 'react'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Auth from './views/Auth'

const client = new ApolloClient({
    uri: 'localhost:4000',
})

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Route exact path='/auth' component={Auth} />
            </Router>
        </ApolloProvider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))