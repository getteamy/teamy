import React, { useState } from 'react'

import styled from 'styled-components'

import Card from '../../components/Card'
import Logo from '../../components/Logo'
import { H6, SmallSubtitle } from '../../components/Typography'
import StyledInput from '../../components/TextField'

const CardContainer = styled.div`
    height: 376px;
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

const Header = styled.div`
    display: flex;
    width: 100%;
    align-items: baseline;

    > :first-child {
        margin-right: 16px;
    }
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
                        <SmallSubtitle>Connect to Teamy</SmallSubtitle>
                        <form>
                        <StyledInput
                            // label='Email'
                            onChange={() => false}
                        />
                        </form>
                    </Header>
                </Card>
            </CardContainer>
       </Container>
    )
}

export default Auth