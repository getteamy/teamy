import React, { useState } from 'react'

import { Button, Card, Form } from 'react-bootstrap'
import styled from 'styled-components'

import Logo from '../../components/Logo'

const StyledCard = styled(Card)`
    margin-top: 50px;
    width: 400px;
    border: 0;
    padding: 20px;
    box-shadow: 0 12px 25px -5px rgba(0,0,0,0.15);
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    > h5, div {
        margin-bottom: 0;
    }
`

function Auth() {
    const [isLoggingIn, setIsLoggingIn] = useState(true)

    return (
        <Container>
            <Logo />
            <StyledCard>
                <Card.Body>
                    <CardHeader>
                        <Card.Title>{isLoggingIn ? 'Welcome back' : 'Welcome'}</Card.Title>
                        <Button variant='link' onClick={() => setIsLoggingIn(!isLoggingIn)}>{isLoggingIn ? 'Register' : 'Login'}</Button>
                    </CardHeader>
                    <Form>
                        <Form.Group controlId='formBasicEmail'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type='email' placeholder='eg: johndoe@example.com' />
                            <Form.Text className='text-muted'>
                                Your email won't be shared.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId='formBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Password' />
                        </Form.Group>
                        <Button variant='primary' type='submit'>
                            {isLoggingIn ? 'Login' : 'Register'}
                        </Button>
                    </Form>
                </Card.Body>
            </StyledCard>
        </Container>
    )
}

export default Auth