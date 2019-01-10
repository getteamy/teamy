import React from 'react'
import { Button, ButtonGroup, ActionList, Popover, Card, Form, FormLayout, Layout, TextField, AppProvider, Page } from '@shopify/polaris'
import { MainLayout, LoginWrapper, Logo } from './style';

export default () => (
    <AppProvider>
        <MainLayout>
            <LoginWrapper>
                <Logo src={"https://i.imgur.com/QflCUhS.png"} />
                <Card sectioned>
                    <Card.Header
                        title="Welcome to Teamy"
                    >
                        <Popover
                            active={false}
                            activator={<Button disclosure plain>Login</Button>}
                            onClose={() => { }}
                        >
                            <ActionList items={[{ content: 'Login' }, { content: 'Register' }]} />
                        </Popover>
                    </Card.Header>
                    <Card.Section>
                        <Form onSubmit={() => console.log("hey")}>
                            <FormLayout>
                                <TextField label="Email" type="email" placeholder="e.g. johndoe@example.com" onChange={(e => e)} />
                                <TextField labelAction={{content: 'Forgot password?'}} type="password" label="Password" onChange={(e => e)} />
                                <Button primary size={"large"} fullWidth submit>Login</Button>
                            </FormLayout>
                        </Form>
                    </Card.Section>
                </Card>
            </LoginWrapper>
        </MainLayout>
    </AppProvider>
)