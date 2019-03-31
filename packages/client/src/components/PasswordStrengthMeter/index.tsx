import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import { B300, G200, N20, R300, R400, Y100, Y300, Y400 } from '../../utils/colors'
import { easing } from '../../utils/easing'
import { H200 } from '../Typography'

const Container = styled.div<ContainerProps>`
    height: 40px;
    width: 208px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    transition: .225s ${easing.standard};
    ${({disabled = true} : ContainerProps) => disabled && 'opacity: 0'}
`

const Meter = styled.div`
    height: 4px;
    background-color: ${N20};
    border-radius: 5px;
`

const Level = styled.div<LevelProps>`
    ${({level = 0}) => 
        `
        height: 4px;
        width: ${level*25}%;
        background-color: ${colors[level]};
        border-radius: 5px;
        transition: .225s ${easing.standard};
        `
    }
`

interface LevelProps {
    level?: number
}

interface PasswordStrengthMeterProps {
    strength?: number
    disabled?: boolean
}

interface ContainerProps {
    disabled?: boolean
}

const messages = ['Too weak', 'Still too weak', 'Ok', 'Great', 'World Class']
const colors = [ null, R300, Y300, Y100, G200 ]

function PasswordStrengthMeter({strength = 0, disabled} : PasswordStrengthMeterProps) {
    const [message, setMessage] = useState('')

    useEffect(
        () => setMessage(messages[strength]),
        [strength],
    )

    return (
        <Container disabled={disabled}>
            <H200>{message}</H200>
            <Meter>
                <Level level={strength}/>
            </Meter>
        </Container>
    )
}

export default PasswordStrengthMeter