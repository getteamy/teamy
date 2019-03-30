import React from "react"

import CrossIcon from "@atlaskit/icon/glyph/cross"
import ErrorIcon from "@atlaskit/icon/glyph/error"
import posed from "react-pose"
import styled from "styled-components"

import { R300, R400 } from "../../utils/colors"
import { easing } from "../../utils/easing"
import { shadows } from "../../utils/shadows"

export interface ToastProps {
  message: string
  onDismiss(): void
  timeout?: number
}

const Message = styled.p`
  color: white;
  font-size: 14px;
  font-weight: 500;
  margin: 0 16px;
`

const Close = styled.div`
  background-color: transparent;
  border-radius: 5px;
  transition: 0.15s ${easing.standard};

  :hover {
    cursor: pointer;
    background-color: ${R300};
    width: 24px;
    height: 24px;
  }
`

const AnimationContainer = posed.div({
  enter: { opacity: 1, delay: 300 },
  exit: { opacity: 0, transition: { duration: 200 } }
})

const Container = styled(AnimationContainer)`
  height: 48px;
  border-radius: 5px;
  background-color: ${R400};
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 0;

  ${shadows[400]}
`

class Toast extends React.PureComponent<ToastProps> {
  public static defaultProps = {
    timeout: 5000
  }

  private dismiss = () => {
    this.props.onDismiss()
  }

  private startTimeout() {
    setTimeout(() => this.dismiss(), this.props.timeout)
  }

  public componentDidMount() {
    this.startTimeout()
  }

  public render() {
    const { message } = this.props
    return (
      <Container>
        <ErrorIcon label="" primaryColor="white" secondaryColor={R400} />
        <Message>{message}</Message>
        <Close onClick={this.dismiss}>
          <CrossIcon label="" primaryColor="white" />
        </Close>
      </Container>
    )
  }
}

export default Toast
