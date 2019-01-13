import React from 'react'

import { AppProvider } from '@shopify/polaris'
import '@shopify/polaris/styles.css'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import { from } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { ApolloProvider } from 'react-apollo'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Register from './views/Auth'

const httpLink = createHttpLink({
    uri: 'http://localhost:4000',
})

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([httpLink]),
})

function App() {
    return (
            <ApolloProvider client={client}>
                <AppProvider>
                    <Router>
                        <Route exact path='/auth' component={Register} />
                    </Router>
                </AppProvider>
            </ApolloProvider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))