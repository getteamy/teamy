import React, { ButtonHTMLAttributes } from 'react'

import styled from 'styled-components'
import { B300, N20, B200, B400, N50 } from '../../utils/colors'
import { easing } from '../../utils/easing'
import { shadows } from '../../utils/shadows'
import { variations } from '../../utils/variations'
import Loader from './loader'

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
                background: ${B300};
                color: white;

                :hover {
                    background-color: ${B200};
                }

                :active {
                    background-color: ${B400};
                    box-shadow: none;
                    transition: none;
                }

                :disabled {
                    background-color: ${N20};
                    color: ${N50};
                }
            `
        
        case 'link':
            return `
                color: ${B300};
                background: none;
            `
    }
}



const StyledButton = styled.div<ButtonProps>`
    border-radius: 5px;
    font-size: 14px;
    font-weight: 500;
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
    
    ${props => {
        if (props.variation !== variations.LINK) {
            return `
            padding: 0 14px;
            box-shadow: 0 1px 3px 0 rgba(63,63,68,0.15);
            :hover {
                ${shadows[200]};
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
            pointer-events: none;
            background-color: ${N20};
            color: ${N50}
            box-shadow: none;
        `
    }
`

function Button(props : ButtonProps) {
    const {
        children,
        isDisabled,
        isLoading,
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