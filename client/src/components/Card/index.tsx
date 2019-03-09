import React, { ReactNode } from 'react'

import styled from 'styled-components'
import { shadows } from '../../utils/shadows'

const StyledCard = styled.div`
    background: white;
    ${shadows[400]}
    box-sizing: border-box;
    padding: 40px;
    border-radius: 5px;
    width: 100%;
    height: 100%;
`

interface StyledCardProps {
    children: React.ReactNode
}

export default function({children} : StyledCardProps) {
    return (
        <StyledCard>{children}</StyledCard>
    )
}