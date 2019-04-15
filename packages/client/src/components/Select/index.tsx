import React from 'react'

import styled from 'styled-components'

import { N20, N80 } from '../../utils/colors'
import { H400 } from '../Typography'

interface SelectProps {
  error?: string
  label: string
  required?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  options?: string[]
  defaultValue?: string
}

const StyledSelect = styled.select<SelectProps>`
  background: ${N20};
  outline: none;
  border-radius: 5px;
  border: 0;
  height: 40px;
  padding: 10px;
  font-size: 14px;
  width: 100%;
  select: {
    appearance: none;
  }

  option:hidden {
    color: ${N80};
  }
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

function Select({ label, defaultValue, options = [] }: SelectProps) {
  return (
    <Container>
      <LabelContainer>
        <H400>{label}</H400>
      </LabelContainer>
      <StyledSelect label={label}>
        <option value="" selected disabled hidden>
          {defaultValue}
        </option>
        {options.map(option => (
          <option>{option}</option>
        ))}
      </StyledSelect>
    </Container>
  )
}

export default Select
