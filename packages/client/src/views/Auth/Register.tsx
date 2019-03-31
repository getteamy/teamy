import React, { useEffect, useState } from 'react'

import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import styled from 'styled-components'
import zxcvbn from 'zxcvbn'

import Button from '../../components/Button'
import Card from '../../components/Card'
import FormError from '../../components/FormError'
import Logo from '../../components/Logo'
import PasswordStrengthMeter from '../../components/PasswordStrengthMeter'
import StyledInput from '../../components/TextField'
import { H200, H600, Link, Paragraph } from '../../components/Typography'
import {
  CardContainer,
  Container,
  Footer,
  Header,
  StyledForm,
  UnderlineContainer
} from './style'

const REGISTER = gql`
  mutation register($name: String!, $password: String!) {
    signup(name: $name, password: $password) {
      id
    }
  }
`

function Register() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordStrength, setPasswordStrength] = useState(0)

  const isValid = name !== '' && passwordStrength > 1

  useEffect(() => {
    const strength = Number(zxcvbn(password).score.toFixed())
    setPasswordStrength(strength)
  }, [password])

  return (
    <Container>
      <Logo />
      <CardContainer>
        <Mutation mutation={REGISTER}>
          {(submit, { data, loading, error }) => (
            <Card>
              <Header>
                <H600>Welcome</H600>
                <H200>Register to Teamy</H200>
              </Header>
              <StyledForm
                onKeyDown={({ key }) =>
                  key === 'Enter' &&
                  isValid &&
                  submit({ variables: { name, password } })
                }
              >
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
                <PasswordStrengthMeter
                  disabled={password === ''}
                  strength={passwordStrength}
                />
                <Button
                  isLoading={loading}
                  onClick={() => submit({ variables: { name, password } })}
                  isDisabled={!isValid}
                >
                  Register
                </Button>
              </Footer>
            </Card>
          )}
        </Mutation>
      </CardContainer>
      <UnderlineContainer>
        <Paragraph>Already have an account?</Paragraph>
        <Link to="/login">Login</Link>
      </UnderlineContainer>
    </Container>
  )
}

export default Register
