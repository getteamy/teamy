import React, { ButtonHTMLAttributes } from 'react'

import styled from 'styled-components'
import { colors } from '../../utils/colors'
import { easing } from '../../utils/easing'
import { shadows } from '../../utils/shadows'
import Loader from './loader'

export enum variations {
    DANGER = 'danger',
    LINK = 'link',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    SUBTLE = 'subtle',
    WARNING = 'warning',
}

export type ButtonProps = {
    fullWidth?: boolean
    isDisabled?: boolean
    isLoading?: boolean
    isActive?: boolean
    onClick?: (event: React.MouseEvent<HTMLElement>) => any
    variation?: variations
} & ButtonHTMLAttributes<HTMLButtonElement>

const getStyleFromVariation = (variation?: variations) => {
    switch (variation) {
        case 'primary':
            return `
                background: ${colors.blue};
                color: white;
            `
        case 'link':
            return `
                color: ${colors.blue};
                background: none;
            `
    }
}



const StyledButton = styled.div<ButtonProps>`
    border-radius: 5px;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.1px;
    height: 40px;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    text-decoration: none;
    line-height: 1;
    cursor: pointer;
    border: none;
    outline: none;
    transition: .15s ${easing.standard};
    user-select: none;

    :active {
        box-shadow: none;
        transition: none;
        filter: brightness(0.8);
    }
    
    ${props => {
        if (props.variation !== variations.LINK) {
            return `
            padding: 0 12px;
            box-shadow: ${shadows[80]};
            :hover {
                box-shadow: ${shadows[200]};
            }

            `
        }
    }}
    


    ${props => (
        getStyleFromVariation(props.variation)
    )}

    ${props => props.isLoading &&
        `
          color: transparent;
          cursor: wait;
        `
    }

    ${props => props.isDisabled &&
        `
            cursor: none;
            pointer-events: none;
            background-color: ${colors.skyDark};
            box-shadow: none;
        `
    }
`

function Button(props : ButtonProps) {
    const {
        children,
        fullWidth,
        isDisabled,
        isLoading,
        isActive,
        onClick,
        variation = variations.PRIMARY,
    } = props
    
    return (
        <StyledButton
            variation={variation}
            onClick={onClick}
            isLoading={isLoading}
            isDisabled={isDisabled}
        >
            {children}
            {isLoading && variation !== variations.LINK && <Loader />}
        </StyledButton>
    )
}

export default Button