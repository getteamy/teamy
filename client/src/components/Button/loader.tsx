import React from 'react'

import styled from 'styled-components'

const Loader = styled.div`
    display: inline-block;
    width: 24px;
    height: 24px;
    position: absolute;

    :after {
        content: " ";
        display: block;
        width: 16px;
        height: 16px;
        margin: 2px;
        border-radius: 50%;
        border: 2px solid white;
        border-color: white transparent white transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }


    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

export default Loader