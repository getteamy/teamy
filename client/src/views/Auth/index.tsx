import React, { useState } from 'react'

import styled from 'styled-components'

import Card from '../../components/Card'
import Logo from '../../components/Logo'
import { H6, SmallSubtitle } from '../../components/Typography'

const CardContainer = styled.div`
    height: 376px;
    width: 400px;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

function Auth() {
    const [isLoggingIn, setIsLoggingIn] = useState(true)

    return (
        <Container>
            <Logo />
            <CardContainer>
                <Card>
                    <H6>Welcome</H6>
                    <SmallSubtitle>Connect to Teamy</SmallSubtitle>
                </Card>
            </CardContainer>
       </Container>
    )
}

export default Auth