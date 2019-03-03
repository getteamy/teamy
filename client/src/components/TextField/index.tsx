import React, { ChangeEvent, ReactNode } from 'react'

import { Error } from 'styled-icons/material'

import styled from 'styled-components'
import { colors } from '../../utils/colors'
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
    color: ${colors.ink};
    transition: border-color .15s ${easing.standard},box-shadow .15s ${easing.standard};
    width: 100%;
    
    :focus {
        border-color: rgba(140,190,210,1);
        box-shadow: 0 0 0 0.2rem ${colors.blueLight};
    }
    
    ::placeholder {
        color: ${colors.skyDark};
    }

    ${props =>
        props.isDisabled &&
        `
            cursor: not-allowed;
        `
    };

    ${props => 
        props.hasError ? 
        `
            border: 1px solid ${colors.red};
        ` :
        `
            border: 1px solid ${colors.sky};
        `
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
`

const ErrorLabel = styled(Label)`
    color: ${colors.red};
    display: flex;
    justify-content: center;
    align-items: center;
    animation: appear .15s ${easing.standard};

    @keyframes appear {
        from {
            opacity: 0;
            transform: translateY(8px);
        }
        to {
            opacity: 1;
            transform: none;
        }
    }
`

const ErrorIcon = styled(Error)`
    margin-left: 4px;
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
                {error && <ErrorLabel>{error}<ErrorIcon size='20'/></ErrorLabel>}
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