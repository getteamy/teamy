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

const SET_SKILLS = gql`
  mutation setSkills($name: String!, $password: String!) {
    setSkills(name: $name, password: $password) {
      token
    }
  }
`

function Skills() {
  const [male, setMale] = useState(true)
  const [age, setAge] = useState(18)
  const [isValid, setIsValid] = useState(true)

  return (
    <Container>
      <CardContainer>
        <Mutation mutation={SET_SKILLS}>
          {(submit, { data, loading, error }) => (
            <Card>
              <Header>
                <H600>Who are you</H600>
                <H200>Define yourself</H200>
              </Header>
              <StyledForm>
                {error && error.graphQLErrors[0] && (
                  <FormError message={error.graphQLErrors[0].message} />
                )}
                <StyledInput
                  label="Gender"
                  onChange={() => true}
                  value={(male && 'male') || undefined}
                  placeholder="johndoe@example.com"
                />
                <StyledInput
                  label="Age"
                  type="number"
                  onChange={() => true}
                  value={age.toString() || undefined}
                />
                <StyledInput
                  label="Skills"
                  onChange={() => true}
                  value={age.toString() || undefined}
                />
              </StyledForm>
              <Footer>
                <div />
                <Button
                  isLoading={loading}
                  onClick={() => true}
                  isDisabled={!isValid}
                >
                  Login
                </Button>
              </Footer>
            </Card>
          )}
        </Mutation>
      </CardContainer>
    </Container>
  )
}

export default Skills
