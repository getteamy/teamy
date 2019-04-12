import React, { ReactNode } from 'react'
import { B200, B300, B400, N20, N50 } from '../../utils/colors'
import styled from 'styled-components'
import { shadows } from '../../utils/shadows'

const StyledSideBar = styled.div`
  background: ${B300};
  box-sizing: border-box;
  padding: 0px;
  width: 64px;
  height: 100%;
  align-self: flex-start;
`

function SideBar() {
  return (
    <StyledSideBar></ StyledSideBar>
  )
}

export default SideBar