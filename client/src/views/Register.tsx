import React from 'react'
import { Button, ButtonGroup, ActionList, Popover, Card, Form, FormLayout, Layout, TextField, AppProvider, Page } from '@shopify/polaris'
import styled from 'styled-components'

const MainLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const Logo = styled.img`
    width: 100%;
    height: 128px;
    object-fit: contain;
`

const LoginWrapper = styled.div`
    width: 384px;
    margin-bottom: 128px;
`

const Register = () => (
    <AppProvider>
        <MainLayout>
            <LoginWrapper>
                <Logo src={"https://i.imgur.com/QflCUhS.png"}></Logo>
                <Card sectioned>
                    <Card.Header
                        title="Welcome to Teamy"
                    >
                        <Popover
                            active={false}
                            activator={
                                <Button disclosure plain>
                                    Login
                            </Button>
                            }
                            onClose={() => { }}
                        >
                            <ActionList items={[{ content: 'Login' }, { content: 'Register' }]} />
                        </Popover>
                    </Card.Header>
                    <Card.Section>
                        <Form onSubmit={() => console.log("hey")}>
                            <FormLayout>
                                <TextField label="Email" type="email" placeholder="e.g. johndoe@example.com" onChange={(e => e)} />
                                <TextField type="password" label="Password" onChange={(e => e)} />
                                <Button primary size={"large"} fullWidth submit>Login</Button>
                            </FormLayout>
                        </Form>
                    </Card.Section>
                </Card>
            </LoginWrapper>
        </MainLayout>
    </AppProvider>
)

export default Register