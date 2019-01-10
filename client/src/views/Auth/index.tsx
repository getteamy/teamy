import React from 'react'

import { ActionList, Button, Card, Form, FormLayout, Popover, TextField } from '@shopify/polaris'
import { LoginWrapper, Logo, MainLayout } from './style'

export default () => (
        <MainLayout>
            <LoginWrapper>
                <Logo src={'https://i.imgur.com/QflCUhS.png'} />
                <Card sectioned>
                    <Card.Header
                        title='Welcome to Teamy'
                    >
                        <Popover
                            active={false}
                            activator={<Button disclosure plain>Login</Button>}
                            onClose={e=>e}
                        >
                            <ActionList items={[{ content: 'Login' }, { content: 'Register' }]} />
                        </Popover>
                    </Card.Header>
                    <Card.Section>
                        <Form onSubmit={e => e}>
                            <FormLayout>
                                <TextField label='Email' type='email' placeholder='e.g. johndoe@example.com' onChange={(e => e)} />
                                <TextField labelAction={{content: 'Forgot password?'}} type='password' label='Password' onChange={(e => e)} />
                                <Button primary size={'large'} fullWidth submit>Login</Button>
                            </FormLayout>
                        </Form>
                    </Card.Section>
                </Card>
            </LoginWrapper>
        </MainLayout>
)