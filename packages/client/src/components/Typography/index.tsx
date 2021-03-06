import styled from 'styled-components'

import { Link as RouterLink } from 'react-router-dom'
import { B100, B300, B400, N200, N800 } from '../../utils/colors'

export const H900 = styled.p`
    font-weight: 500;
    font-size: 35px;
    color: ${N800};
    letter-spacing: -0.35px;
    text-align: left;
    line-height: 40px;
`

export const H800 = styled.p`
    font-weight: 500;
    font-size: 29px;
    color: ${N800};
    letter-spacing: -0.32px;
    text-align: left;
    line-height: 32px;
`

export const H700 = styled.p`
    font-weight: 500;
    font-size: 24px;
    color: #172B4D;
    letter-spacing: -0.24px;
    line-height: 28px;
`

export const H600 = styled.p`
    font-weight: 500;
    font-size: 20px;
    color: ${N800};
    letter-spacing: -0.17px;
    line-height: 24px;
`

export const H500 = styled.p`
    font-weight: 500;
    font-size: 16px;
    color: ${N800};
    line-height: 20px;
`

export const H400 = styled.p`
    font-weight: 600;
    font-size: 14px;
    color: ${N800};
    line-height: 20px;
`

export const H300 = styled.p`
    font-weight: 600;
    font-size: 12px;
    color: ${N800};
    text-align: left;
    line-height: 16px;
`

export const H200 = styled.p`
    font-weight: 600;
    font-size: 12px;
    color: ${N200};
    line-height: 16px;
`

export const H100 = styled.p`
    font-weight: 400;
    font-size: 11px;
    color: ${N200};
    text-align: left;
    line-height: 12px;
`

export const Paragraph = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: ${N800};
    text-align: left;
    line-height: 20px;
`

export const BlockQuote = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: ${N200};
    text-align: left;
    line-height: 20px;
`

export const Small = styled.p`
    font-weight: 400;
    font-size: 11px;
    color: ${N200};
    line-height: 16px;
`

export const Link = styled(RouterLink)`
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
    user-select: none;
    color: ${B300};
    padding: 0 8px;

    :hover {
        color: ${B100};
    }

    :active { 
        color: ${B400};
    }
`