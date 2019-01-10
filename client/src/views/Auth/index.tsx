import { capitalize } from 'lodash'
import React from 'react'

import { ActionList, Button, Card, Form, FormLayout, Popover, TextField } from '@shopify/polaris'
import { LoginWrapper, Logo, MainLayout } from './style'

class Auth extends React.Component {
    public state = {
        email: '',
        password: '',
        popoverActive: false,
        type: 'LOGIN',
    }

    private handleChange = (field: string) => (value: string) => this.setState({ [field]: value })

    private togglePopover = () => {
        this.setState(({ popoverActive }: any) => {
            return { popoverActive: !popoverActive }
        })
    }

    public render() {
        const { email, password, popoverActive, type } = this.state
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
                                activator={<Button disclosure plain onClick={() => this.togglePopover()}>{capitalize(type)}</Button>}
                                onClose={() => this.togglePopover()}
                            >
                                <ActionList
                                    items={[
                                            { content: 'Login', active: type === 'LOGIN', onAction: () => this.setState({ type: 'LOGIN' }) },
                                            { content: 'Register', active: type === 'REGISTER', onAction: () => this.setState({ type: 'REGISTER' })},
                                        ]}
                                />
                            </Popover>
                        </Card.Header>
                        <Card.Section>
                            <Form onSubmit={e => e}>
                                <FormLayout>
                                    <TextField value={email} onChange={this.handleChange('email')} label='Email' type='email' placeholder='e.g. johndoe@example.com' />
                                    <TextField value={password} onChange={this.handleChange('password')} labelAction={type === 'LOGIN' && { content: 'Forgot password?' } || undefined} type='password' label='Password' />
                                    <Button primary size={'large'} fullWidth submit>{capitalize(type)}</Button>
                                </FormLayout>
                            </Form>
                        </Card.Section>
                    </Card>
                </LoginWrapper>
            </MainLayout>
        )
    }
}

export default Auth