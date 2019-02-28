import React, { ReactNode } from 'react'

import styled from 'styled-components'

const StyledCard = styled.div`
    background: white;
    box-shadow: 0 12px 24px -6px rgba(0,0,0,0.14);
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