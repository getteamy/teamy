import React from 'react'

import styled from 'styled-components'
import { B300, N50, N80, N800, N90 } from '../../utils/colors'
import { easing } from '../../utils/easing'
import { H400 } from '../Typography'

interface StyledInputProps {
  hasError?: boolean
  isDisabled?: boolean
}

export interface InputProps {
  error?: string
  isDisabled?: boolean
  label: string
  isRequired?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  value?: string
  placeholder?: string
}

const Input = styled.input<StyledInputProps>`
  outline: none;
  border-radius: 5px;
  border: 1px solid ${N50};
  height: 40px;
  padding: 10px;
  font-size: 14px;
  color: ${N800};
  caret-color: ${B300};
  transition: border-color 0.15s ${easing.standard},
    box-shadow 0.15s ${easing.standard};
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
        `};
`

const Container = styled.div`
  margin: 16px 0 16px;
  display: inline-block;
  width: 100%;
`

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`

function TextField({
  label,
  isDisabled = false,
  error,
  onChange,
  type,
  value,
  placeholder
}: InputProps) {
  return (
    <Container>
      <LabelContainer>
        <H400>{label}</H400>
      </LabelContainer>
      <Input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        hasError={(error && true) || false}
        isDisabled={isDisabled}
      />
    </Container>
  )
}

export default TextField
