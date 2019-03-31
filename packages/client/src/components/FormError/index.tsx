import React from 'react'

import styled from 'styled-components'

import EditorWarningIcon from '@atlaskit/icon/glyph/editor/warning'

import { R400, R50 } from '../../utils/colors'

const Message = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: ${R400};
    text-align: left;
    line-height: 20px;
    margin-left: 8px;
`

const Container = styled.div`
    background-color: ${R50};
    border-radius: 5px;
    padding: 0 16px;
    height: 40px;
    display: flex;
    align-items: center;
`

interface FormErrorProps {
    message: string
}

function FormError({message} : FormErrorProps) {
    return (
        <Container>
            <EditorWarningIcon primaryColor={R400} label=''/>
            <Message>{message}</Message>
        </Container>
    )
}

export default FormError