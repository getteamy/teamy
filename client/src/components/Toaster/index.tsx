import React from 'react'

import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { Error } from 'styled-icons/material'

import { colors } from '../../utils/colors'
import { easing } from '../../utils/easing'
import { shadows } from '../../utils/shadows'
import { SmallBody } from '../Typography'

const Container = styled.div`
    width: 100vw;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

const StyledToast = styled.div`
    height: 48px;
    background-color: white;
    box-shadow: ${shadows[300]};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    margin-top: 24px;
    border-radius: 5px;
    color: ${colors.inkLight};
    animation: appearToast 0.375s .3s ${easing.decelerate} both;

    @keyframes appearToast {
        from {
            transform: translateY(-150%) scale(0.7);
            opacity: 0.5;
            box-shadow: none;
        }
        to {
            transform: none;
            opacity: 1;
            box-shadow: ${shadows[300]};
        }
    }
`

const Divider = styled.div`
    height: 100%;
    border: 0.5px solid ${colors.sky};
    margin: 0 8px 0 16px;
`

const StyledError = styled(Error)`
    color: ${colors.inkLightest};
`

export interface ToastProps {
    message: React.ReactNode
    timeout?: number
}

function Toast({timeout=5000, message} : ToastProps) {
    return (
        <Container>
            <StyledToast>
                <StyledError size={20}/>
                <Divider />
                <SmallBody>{message}</SmallBody>
            </StyledToast>
        </Container>
    )
}

export class Toaster {
    public static create({container = document.body, message} : any) {
        const containerElement = document.createElement('div')
        container.appendChild(containerElement)
        const toaster = ReactDOM.render(
            <Toast message={message}/>,
            containerElement,
        ) as Toaster
        return toaster
    }
}