import React, { ChangeEvent, ReactNode } from 'react'

import { Error } from 'styled-icons/material'

import styled from 'styled-components'
import { B300, N50, N80, N800 } from '../../utils/colors'
import { easing } from '../../utils/easing'

interface StyledInputProps {
    hasError?: boolean
    isDisabled?: boolean
}

export interface InputProps {
  error?: string
  isDisabled?: boolean
  label: string
  isRequired?: boolean
  onChange?: (event: React.FormEvent) => void
  type?: string
  value?: string
  placeholder?: string
}

const Input = styled.input<StyledInputProps>`
    outline: none;
    border-radius: 5px;
    height: 40px;
    padding: 10px;
    font-size: 14px;
    color: ${N50};
    transition: border-color .15s ${easing.standard},box-shadow .15s ${easing.standard};
    width: 100%;
    
    :focus {
        border-color: ${B300};
    }
    
    ::placeholder {
        color: ${N80};
    }

    ${props =>
        props.isDisabled &&
        `
            cursor: not-allowed;
        `
    };
`

const Container = styled.div`
    margin-top: 32px;
`

const Label = styled.p`
    opacity: 0.87;
    font-size: 14px;
    color: ${N800};
    letter-spacing: 0;
    text-align: left;
    line-height: 20px;
`

const LabelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
`

function TextField({label, isDisabled = false, error, onChange, type, value, placeholder} : InputProps) {
    return (
        <Container>
            <LabelContainer>
                <Label>{label}</Label>
            </LabelContainer>
            <Input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                hasError={error && true || false}
                isDisabled={isDisabled}
            />
        </Container>
    )
}

export default TextField