import styled, { css } from 'styled-components'
import { colors } from '../../utils/colors'
import { easing } from '../../utils/easing'

interface StyledInputProps {
    hasError?: boolean
    isDisabled?: boolean
}

const StyledInput = styled.input<StyledInputProps>`
    border: 1px solid ${colors.sky};
    outline: none;
    border-radius: 5px;
    height: 40px;
    padding: 10px;
    font-size: 14px;
    color: ${colors.ink};
    transition: border-color .15s ${easing.standard},box-shadow .15s ${easing.standard};
    
    :focus {
        border-color: rgba(140,190,210,1);
        box-shadow: 0 0 0 0.2rem ${colors.blueLight};
    }
    ${props =>
        props.isDisabled &&
        css`
            cursor: not-allowed;
        `};
`

export default StyledInput