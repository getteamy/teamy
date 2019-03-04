import React from 'react'

import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { onError, ErrorResponse } from 'apollo-link-error'
import { ApolloProvider } from 'react-apollo'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css'
import './reset.css'

import Auth from './views/Auth'

const errorLink = ({ graphQLErrors, networkError } : ErrorResponse) => {
    if (graphQLErrors) graphQLErrors.map(({ message, locations, path }) => console.log(message))
    if (networkError) console.log(`[Network error]: ${networkError}`)
}

const client = new ApolloClient({
    cache: new InMemoryCache(),
    onError: errorLink,
    uri: 'http://localhost:4000',
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