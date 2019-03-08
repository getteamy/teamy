import styled from 'styled-components'

import { N20, N90 } from '../../utils/colors'

interface TextProps {
    subdued?: boolean
}

const getSubduedColor = (subdued? : boolean) => subdued ? N20 : N90

export const H6 = styled.p<TextProps>`
    opacity: 0.87;
    font-size: 20px;
    letter-spacing: 0.15px;

    color: ${({subdued}) => getSubduedColor(subdued)}
`
export const H5 = styled.p<TextProps>`
    opacity: 0.87;
    font-size: 24px;

    color: ${({subdued}) => getSubduedColor(subdued)}
`
export const H4 = styled.p<TextProps>`
    opacity: 0.87;
    font-size: 34px;
    letter-spacing: 0.25px;
    text-align: left;

    color: ${({subdued}) => getSubduedColor(subdued)}
`
export const H3 = styled.p<TextProps>`
    opacity: 0.87;
    font-size: 48px;
    text-align: left;
    
    color: ${({subdued}) => getSubduedColor(subdued)}
`
export const H2 = styled.p<TextProps>`
    opacity: 0.87;
    font-size: 60px;
    letter-spacing: -0.5px;
    text-align: left;

    color: ${({subdued}) => getSubduedColor(subdued)}
`
export const H1 = styled.p<TextProps>`
    opacity: 0.87;
    font-size: 96px;
    letter-spacing: -1.5px;
    text-align: left;

    color: ${({subdued}) => getSubduedColor(subdued)}
`

export const Subtitle = styled.p<TextProps>`
    opacity: 0.87;
    font-size: 16px;
    letter-spacing: 0;
    text-align: left;
    line-height: 24px;
    margin: 0 10px;

    color: ${({subdued}) => getSubduedColor(subdued)}
`

export const SmallSubtitle = styled.p<TextProps>`
    opacity: 0.87;
    font-size: 14px;
    letter-spacing: -0.13px;
    text-align: left;
    line-height: 24px;
    margin: 0 10px;

    color: ${({subdued}) => getSubduedColor(subdued)}
`

export const Body = styled.p<TextProps>`
    font-size: 16px;
    letter-spacing: 0;
    text-align: left;
    line-height: 28px;
    margin: 0 10px;

    color: ${({subdued}) => getSubduedColor(subdued)}
`

export const SmallBody = styled.p<TextProps>`
    opacity: 0.87;
    font-size: 14px;
    letter-spacing: 0;
    text-align: left;
    line-height: 20px;
    margin: 0 10px;

    color: ${({subdued}) => getSubduedColor(subdued)}
`
