import React, { useEffect, useState } from 'react'

import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

import Button from '../../components/Button'
import Card from '../../components/Card'
import FormError from '../../components/FormError'
import Logo from '../../components/Logo'
import StyledInput from '../../components/TextField'
import { H200, H600, Link, Paragraph } from '../../components/Typography'
import { variations } from '../../utils/variations'
import {
  CardContainer,
  Container,
  Footer,
  Header,
  StyledForm,
  UnderlineContainer
} from './style'

const LOGIN = gql`
  mutation login($name: String!, $password: String!) {
    login(name: $name, password: $password) {
      token
    }
  }
`

function Login() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const isValid = password !== '' || name !== ''

  return (
    <Container>
      <Logo />
      <CardContainer>
        <Mutation mutation={LOGIN}>
          {(submit, { data, loading, error }) => (
            <Card>
              <Header>
                <H600>Welcome</H600>
                <H200>Connect to Teamy</H200>
              </Header>
              <StyledForm>
                {error && error.graphQLErrors[0] && (
                  <FormError message={error.graphQLErrors[0].message} />
                )}
                <StyledInput
                  label="Name"
                  onChange={({ target: { value } }) => setName(value)}
                  value={name}
                  placeholder="johndoe@example.com"
                />
                <StyledInput
                  label="Password"
                  type="password"
                  onChange={({ target: { value } }) => setPassword(value)}
                  value={password}
                />
              </StyledForm>
              <Footer>
                <Button variation={variations.LINK}>
                  I forgot my password
                </Button>
                <Button
                  isLoading={loading}
                  onClick={() => submit({ variables: { name, password } })}
                  isDisabled={!isValid}
                >
                  Login
                </Button>
              </Footer>
            </Card>
          )}
        </Mutation>
      </CardContainer>
      <UnderlineContainer>
        <Paragraph>First time there?</Paragraph>
        <Link to="/register">Create an account</Link>
      </UnderlineContainer>
    </Container>
  )
}

export default Login
