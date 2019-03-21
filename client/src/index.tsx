import React from 'react'

import { ApolloLink, HttpLink, InMemoryCache } from 'apollo-boost'
import ApolloClient from 'apollo-client'
import { onError, ErrorResponse } from 'apollo-link-error'
import { ApolloProvider } from 'react-apollo'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './index.css'
import './reset.css'

import { AppToaster } from './components/Toaster'
import Login from './views/Auth/Login'
import Register from './views/Auth/Register'

const errorLink = onError(({ graphQLErrors, networkError, response } : ErrorResponse) => {
    if (graphQLErrors) graphQLErrors.map(({ message, locations, path }) => console.log(message))
    if (networkError) {
        AppToaster.show({message: networkError.message, onDismiss: ()=>true})
    }
})

const uri = new HttpLink({
    credentials: 'same-origin',
    uri: 'http://localhost:4000/',
  })


const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([errorLink, uri]),
})

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                </Switch>
            </Router>
        </ApolloProvider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))