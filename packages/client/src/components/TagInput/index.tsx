import React, { useState } from 'react'

import TagsInput from 'react-tagsinput'
import styled from 'styled-components'
import { B100, B300 } from '../../utils/colors'
import { H400 } from '../Typography'
import { easing } from '../../utils/easing'

const Container = styled.div`
  margin: 16px 0 16px;
  display: inline-block;
  width: 100%;
`

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`

const StyledTagsInput = styled(TagsInput)`
  border: 1px solid #c1c7d0;
  min-height: 80px;
  overflow: hidden;
  border-radius: 5px;
  padding: 8px;
  background-color: white;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;

  input {
    background: transparent;
    border: 0;
    color: #777;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 6px;
    margin-top: 1px;
    outline: none;
    padding: 5px;
    width: 80px;
  }

  & span > span {
    background-color: ${B100};
    border-radius: 5px;
    border: 0px;
    color: white;
    display: inline-block;
    font-size: 13px;
    font-weight: 400;
    margin-bottom: 5px;
    margin-right: 5px;
    padding: 5px 12px 5px 12px;
    font-size: 14px;
    height: 24px;
    animation: appear 0.225s ${easing.standard};

    & a::before {
      content: ' ×';
    }

    > :last-child {
      cursor: pointer;
      font-weight: bold;
    }
  }

  @keyframes appear {
    from {
      opacity: 0;
      transform: translateX(-5%);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
`

function TagInput({ label }: any) {
  const [tags, setTags] = useState([])

  return (
    <Container>
      <LabelContainer>
        <H400>{label}</H400>
      </LabelContainer>
      <StyledTagsInput value={tags} onChange={(tags: any) => setTags(tags)} />
    </Container>
  )
}

export default TagInput
