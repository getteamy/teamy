import React, { useState } from 'react'

import styled from 'styled-components'

import Button, { variations } from '../../components/Button'
import Card from '../../components/Card'
import Logo from '../../components/Logo'
import StyledInput from '../../components/TextField'
import { H6, SmallBody, SmallSubtitle } from '../../components/Typography'

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

    > :first-child {
        margin-right: 16px;
    }
`

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: baseline;
    margin-top: 32px;
`

const UnderlineContainer = styled.div`
    display: inline-flex;
    align-items: baseline;
    margin-top: 36px;
`

function Auth() {
    const [isLoggingIn, setIsLoggingIn] = useState(true)

    return (
        <Container>
            <Logo />
            <CardContainer>
                <Card>
                    <Header>
                        <H6>Welcome</H6>
                        <SmallSubtitle subdued>Connect to Teamy</SmallSubtitle>
                    </Header>
                    <StyledForm>
                        <StyledInput
                            label='Email'
                            onChange={() => false}
                            placeholder='johndoe@example.com'
                        />
                        <StyledInput
                            label='Password'
                            type='password'
                            onChange={() => false}
                        />
                    </StyledForm>
                    <Footer>
                        <Button variation={variations.LINK}>I forgot my password</Button>
                        <Button>Login</Button>
                    </Footer>
                </Card>
            </CardContainer>
            <UnderlineContainer>
                <SmallBody subdued>First time there?</SmallBody>
                <Button variation={variations.LINK}>Create an account</Button>
            </UnderlineContainer>
       </Container>
    )
}

export default Auth