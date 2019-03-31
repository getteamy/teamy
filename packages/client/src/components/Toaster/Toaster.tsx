import React from 'react'
import ReactDOM from 'react-dom'

import styled from 'styled-components'
import uuid from 'uuid'

import Toast, { ToastProps } from './Toast'
import posed, { PoseGroup } from 'react-pose'

interface ToasterInterface {
  show(props: ToastProps): string
  dismiss(key: string): void
}

type ToastOptions = ToastProps & { key: string }

interface ToasterState {
  toasts: ToastOptions[]
}

const Container = styled(posed.div())`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 999;
  position: fixed;
  right: 0;
  top: 0;
  min-width: 400px;
  min-height: 200px;
  margin: 32px 32px 0;
  box-sizing: border-box;
`

const Children = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: { duration: 225, ease: [0.4, 0.0, 0.2, 1] }
  },
  flip: {
    transition: 'tween'
  },
  exit: {
    y: -32,
    opacity: 0,
    transition: { duration: 150, ease: [0.4, 0.0, 1, 1] }
  }
})

class Toaster extends React.PureComponent<{}, ToasterState>
  implements ToasterInterface {
  public static create(container = document.body): ToasterInterface {
    const containerElement = document.createElement('div')
    container.appendChild(containerElement)
    const toaster = ReactDOM.render(<Toaster />, containerElement) as Toaster
    return toaster
  }

  public state = {
    toasts: []
  }

  public show({ message, timeout, onDismiss }: ToastProps) {
    const key = uuid.v4()
    this.setState({
      toasts: [{ message, timeout, onDismiss, key }, ...this.state.toasts]
    })
    return key
  }

  public dismiss = (key: string) => {
    this.setState({
      toasts: this.state.toasts.filter(
        (toast: ToastOptions) => toast.key !== key
      )
    })
  }

  public render() {
    return (
      <Container>
        <PoseGroup>
          {this.state.toasts.map((toast: ToastOptions) => (
            <Children key={toast.key}>
              <Toast
                {...toast}
                key={toast.key}
                onDismiss={() => this.dismiss(toast.key)}
              />
            </Children>
          ))}
        </PoseGroup>
      </Container>
    )
  }
}

export default Toaster
