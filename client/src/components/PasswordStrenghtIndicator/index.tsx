import React from 'react'

import styled from 'styled-components'

import { N10, N20, N60 } from '../../utils/colors'
import { easing } from '../../utils/easing'
import { SmallSubtitle } from '../Typography'

interface PasswordStrenghtIndicatorProps {
    strenght?: number
}

interface StepProps {
    active?: boolean
}

const strenghtNames = [null, 'Simple','Better','Interesting','World class']

const Steps = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 24px);
    border-radius: 5px;
    overflow: hidden;
    margin-right: 8px;
`

const Step = styled.div<StepProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    transition: .15s ${easing.standard};

    ${
        ({active}) => (
            active ? 
            `
                background-color: ${N20};
                color: ${N60};
            ` : 
            `
                color: ${N10};
                background-color: ${N20};
            `
        )
    }
`

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 40px;

    animation: appear .15s ${easing.standard};

    @keyframes appear {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`


function PasswordStrenghtIndicator({strenght = 1} : PasswordStrenghtIndicatorProps) {
    return (
        <Container>
            <Steps>
                {
                    [1,2,3,4].map(
                        i => (
                            <Step key={i} active={i <= strenght}>{i}</Step>
                        ),
                    )
                }
            </Steps>
            <SmallSubtitle subdued>{strenghtNames[strenght]}</SmallSubtitle>
        </Container>
    )
}

export default PasswordStrenghtIndicator