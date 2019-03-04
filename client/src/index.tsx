import React from 'react'

import { ApolloLink, HttpLink, InMemoryCache } from 'apollo-boost'
import ApolloClient from 'apollo-client'
import { onError, ErrorResponse } from 'apollo-link-error'
import { ApolloProvider } from 'react-apollo'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css'
import './reset.css'

import Auth from './views/Auth'

const errorLink = onError(({ graphQLErrors, networkError, response } : ErrorResponse) => {
    if (graphQLErrors) graphQLErrors.map(({ message, locations, path }) => console.log(message))
    if (networkError) {
        // TODO : Implement this toaster
        // toaster.show({
        //     intent: intents.DANGER,
        //     message,
        // })
    }
})

const uri = new HttpLink({
    credentials: 'same-origin',
    uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql',
  })


const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([errorLink, uri]),
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