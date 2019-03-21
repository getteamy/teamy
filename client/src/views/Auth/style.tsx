import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 400px;
    margin-top: 48px;
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
`

export const StyledForm = styled.form`
    width: 100%;
    margin: 32px 0 32px;
`

export const Header = styled.div`
    display: flex;
    width: 100%;
    align-items: baseline;
    justify-content: space-between;

    > :first-child {
        margin-right: 16px;
    }
`

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 36px;
`

export const UnderlineContainer = styled.div`
    display: inline-flex;
    align-items: baseline;
    margin-top: 36px;
`