import React from 'react'

import { AppProvider } from '@shopify/polaris'
import '@shopify/polaris/styles.css'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
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
    link: httpLink,
})

const Routes = () => (
    <AppProvider>
        <ApolloProvider client={client}>
            <Router>
                <Route exact path='/auth' component={Register} />
            </Router>
        </ApolloProvider>
    </AppProvider>
)

ReactDOM.render(<Routes />, document.getElementById('root'))