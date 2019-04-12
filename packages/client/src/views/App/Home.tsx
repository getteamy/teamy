import React, { useEffect, useState } from 'react'
import SideBar from '../../components/SideBar'
import Logo from '../../components/Logo'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import styled from 'styled-components'
import zxcvbn from 'zxcvbn'
import {
  Container,
} from './style'
import { Redirect } from 'react-router'

function Home() {

  return (
    <Container>
      <Logo />
      <SideBar />
    </Container>
  )
}

export default Home