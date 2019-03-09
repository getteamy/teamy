import React, { useEffect, useState } from 'react'

import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import styled from 'styled-components'
import zxcvbn from 'zxcvbn'

import Button from '../../components/Button'
import Card from '../../components/Card'
import Logo from '../../components/Logo'
import StyledInput from '../../components/TextField'
import { H200, H600, Paragraph } from '../../components/Typography'
import { variations } from '../../utils/variations'

const CardContainer = styled.div`
    height: 400px;
    width: 400px;
    margin-top: 48px;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
`

const StyledForm = styled.form`
    width: 100%;
`

const Header = styled.div`
    display: flex;
    width: 100%;
    align-items: baseline;
    justify-content: space-between;

    > :first-child {
        margin-right: 16px;
    }
`

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: baseline;
    margin-top: 36px;
`

const UnderlineContainer = styled.div`
    display: inline-flex;
    align-items: baseline;
    margin-top: 36px;
`

const LOGIN = gql`
    mutation login($name: String!, $password: String!) {
        login(name: $name, password: $password) {
            token
        }
    }
`

function Auth() {
    const [isLoggingIn, setIsLoggingIn] = useState(true)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [passwordStrength, setPasswordStrength] = useState(0)

    useEffect(
        () => {
            if (!isLoggingIn) {
                const strength = Number(zxcvbn(password).score.toFixed())
                setPasswordStrength((strength !== 0 ? strength : 1))
            }
        }, [password],
    )


    return (
        <Container>
            <Logo />
            <CardContainer>
                <Mutation mutation={LOGIN}>
                    {(login, { data, loading, error }) =>
                        <Card>
                            <Header>
                                <H600>Welcome</H600>
                                <H200>
                                    {isLoggingIn ? 'Connect to Teamy' : 'Register to teamy'}
                                </H200>
                            </Header>
                            <StyledForm>
                                <StyledInput
                                    label='Name'
                                    onChange={({ target: { value } }: any) => setName(value)}
                                    value={name}
                                    placeholder='johndoe@example.com'
                                    error={error && error.graphQLErrors[0] && error.graphQLErrors[0].message}
                                />
                                <StyledInput
                                    label='Password'
                                    type='password'
                                    onChange={({ target: { value } }: any) => setPassword(value)}
                                    value={password}
                                />
                            </StyledForm>
                            <Footer>
                                {isLoggingIn && <Button variation={variations.LINK}>I forgot my password</Button>}
                                <Button
                                    isLoading={loading}
                                    onClick={() => login({ variables: { name, password } })}
                                    isDisabled={password === '' || name === ''}
                                >
                                    {isLoggingIn ? 'Login' : 'Register'}
                                </Button>
                            </Footer>
                        </Card>}
                </Mutation>
            </CardContainer>
            <UnderlineContainer>
                <Paragraph>
                    {isLoggingIn ? 'First time here?' : 'Already registered?'}
                </Paragraph>
                <Button 
                    variation={variations.LINK}
                    onClick={() => setIsLoggingIn(!isLoggingIn)}
                >
                    {isLoggingIn ? 'Create an account' : 'Login to your account'}
                </Button>
            </UnderlineContainer>
        </Container>
    )
}

export default Auth