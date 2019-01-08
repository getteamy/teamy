import React from 'react'
import { Button, ButtonGroup, Card, Form, FormLayout, Layout, TextField, AppProvider, Page } from '@shopify/polaris'

const Register = () => (
    <AppProvider>
        <Page
            title="Welcome to Teamy"
        >
            <Layout>
                <Layout.AnnotatedSection
                    title="Register"
                    description="Teamy lets you build better, faster and stronger teams with strong people matching algorithms"
                >
                    <Card sectioned>
                        <Form onSubmit={() => console.log("hey")}>
                            <FormLayout>
                                <TextField label="Email" type="email" placeholder="e.g. johndoe@example.com" onChange={(e => e)} />
                                <TextField type="password" label="Password" onChange={(e => e)} />
                                <ButtonGroup>
                                    <Button size="large" primary submit>Register</Button>
                                    <Button plain>.. or login</Button>
                                </ButtonGroup>
                            </FormLayout>
                        </Form>
                    </Card>
                </Layout.AnnotatedSection>
            </Layout>
        </Page>
    </AppProvider>
)

export default Register