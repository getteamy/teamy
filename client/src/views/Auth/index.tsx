import React from 'react'

import { ActionList, Button, Card, Form, FormLayout, Popover, TextField } from '@shopify/polaris'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { RouteComponentProps } from 'react-router-dom'

import { AUTH_TOKEN } from '../../constants'
import { LoginWrapper, Logo, MainLayout } from './style'

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

class Auth extends React.Component<RouteComponentProps> {
    public state = {
        email: '',
        login: true,
        name: '',
        password: '',
        popoverActive: false,
    }

    private handleChange = (field: string) => (value: string) => this.setState({ [field]: value })

    private togglePopover = () => {
        this.setState(({ popoverActive }: any) => {
            return { popoverActive: !popoverActive }
        })
    }
    


    public render() {
        const { email, password, name, popoverActive, login } = this.state
        return (
            <MainLayout>
                <LoginWrapper>
                    <Logo src={'https://i.imgur.com/QflCUhS.png'} />
                    <Card sectioned>
                        <Card.Header
                            title='Welcome to Teamy'
                        >
                            <Popover
                                active={popoverActive}
                                activator={<Button disclosure plain onClick={() => this.togglePopover()}>{login ? 'Login' : 'Register'}</Button>}
                                onClose={() => this.togglePopover()}
                            >
                                <ActionList
                                    items={[
                                        { content: 'Login', active: login, onAction: () => this.setState({ login: true }) },
                                        { content: 'Register', active: !login, onAction: () => this.setState({ login: false }) },
                                    ]}
                                />
                            </Popover>
                        </Card.Header>
                        <Card.Section>
                            <Form onSubmit={e => e}>
                                <FormLayout>
                                    <TextField value={email} onChange={this.handleChange('email')} label='Email' type='email' placeholder='e.g. johndoe@example.com' />
                                    {!login && <TextField value={name} onChange={this.handleChange('name')} label='Name' placeholder='e.g. John Doe' />}
                                    <TextField value={password} onChange={this.handleChange('password')} labelAction={login && { content: 'Forgot password?' } || undefined} type='password' label='Password' />
                                    <Mutation
                                        mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
                                        variables={{ email, password, name }}
                                        onCompleted={data => this._confirm(data)}
                                    >
                                        {(mutation, {loading}) => (
                                            <Button primary size={'large'} loading={loading} fullWidth submit onClick={mutation}>{login ? 'Login' : 'Register'}</Button>
                                        )}
                                    </Mutation>
                                </FormLayout>
                            </Form>
                        </Card.Section>
                    </Card>
                </LoginWrapper>
            </MainLayout>
        )
    }

    public _confirm = async (data : any) => {
        const { token } = this.state.login ? data.login : data.signup
        this._saveUserData(token)
        this.props.history.push(`/`)
      }

    private _saveUserData = (token : string) => {
        localStorage.setItem(AUTH_TOKEN, token)
      }
}

export default Auth