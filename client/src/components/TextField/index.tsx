import React, { ChangeEvent, ReactNode } from 'react'

import styled, { css } from 'styled-components'
import { colors } from '../../utils/colors'
import { easing } from '../../utils/easing'

interface StyledInputProps {
    hasError?: boolean
    isDisabled?: boolean
}

export interface InputProps {
  hasError?: boolean
  isDisabled?: boolean
  label: string
  isRequired?: boolean
  onChange?: (value: string | ChangeEvent<HTMLInputElement>) => any
  type?: string
  value?: string
  placeholder?: string
}

const Input = styled.input<StyledInputProps>`
    border: 1px solid ${colors.sky};
    outline: none;
    border-radius: 5px;
    height: 40px;
    padding: 10px;
    font-size: 14px;
    color: ${colors.ink};
    transition: border-color .15s ${easing.standard},box-shadow .15s ${easing.standard};
    width: 100%;
    
    :focus {
        border-color: rgba(140,190,210,1);
        box-shadow: 0 0 0 0.2rem ${colors.blueLight};
    }
    ${props =>
    props.isDisabled &&
    css`
        cursor: not-allowed;
    `};

    ::placeholder {
        color: ${colors.skyDark};
    }
`

const Container = styled.div`
    margin-top: 32px;
`

const Label = styled.p`
    opacity: 0.87;
    font-size: 14px;
    color: ${colors.ink};
    letter-spacing: 0;
    text-align: left;
    line-height: 20px;
    margin-bottom: 16px;
`

function TextField({hasError, label, isDisabled, isRequired, onChange, type, value, placeholder} : InputProps) {
    return (
        <Container>
            <Label>{label}</Label>
            <Input
                type={type}
                placeholder={placeholder}
            />
        </Container>
    )
}

export default TextField